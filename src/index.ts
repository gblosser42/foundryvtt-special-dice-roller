import {secureRandomNumber} from './rng';
import {L5RRoller} from './l5r/roller';
import {L5RRoll} from './l5r/dice';
import {genesysRoller, starWarsRoller} from './genesys/roller';
import {V5Roller} from './v5/roller';
import {CanReRoll, Roller} from './roller';
import {V5Roll} from './v5/dice';


Hooks.on('preCreateChatMessage', (_, data) => {
    const message = data.content;
    const rollers = [
        new L5RRoller(secureRandomNumber, 'l5r'),
        new V5Roller(secureRandomNumber, 'v5'),
        genesysRoller(secureRandomNumber, 'gen'),
        starWarsRoller(secureRandomNumber, 'sw'),
    ];
    if (message !== undefined) {
        for (let roller of rollers) {
            if (roller.handlesCommand(message)) {
                data.content = roller.rollCommand(message);
            }
        }
    }
});

type NumericDieParser<R> = (die: number, face: number) => R;

function parseDice<R>(inputs: HTMLInputElement[], toDie: NumericDieParser<R>): R[] {
    return inputs
        .map((roll) => {
            const die = parseInt(roll.dataset.die ?? '0', 10);
            const faces = parseInt(roll.dataset.face ?? '0', 10);
            return toDie(die, faces);
        });
}

Hooks.on('renderChatLog', () => {
    $('#chat-log').on('click', '.l5r-roller button', (event: Event) => {
        event.preventDefault();

        const button = event.target as HTMLButtonElement;
        const rollerKey = button.dataset.roller as string;
        const form = button.parentElement as HTMLFormElement;
        const rolls = Array.from(form.querySelectorAll('input')) as HTMLInputElement[];
        const selectedRolls = rolls.filter((roll) => roll.checked);

        if (selectedRolls.length > 0) {
            if (button.classList.contains('l5r-roller-keep')) {
                if (rollerKey === 'l5r') {
                    const roller = new L5RRoller(secureRandomNumber, 'l5r');
                    const keptRolls = parseDice(selectedRolls, (die, face) => new L5RRoll(die, face));
                    renderNewRoll(roller.formatRolls(keptRolls));
                }
            } else {
                const omittedRolls = rolls.filter((roll) => !roll.checked);
                if (rollerKey === 'v5') {
                    const roller = new V5Roller(secureRandomNumber, 'v5');
                    reRoll(roller, (die, face) => new V5Roll(die, face), selectedRolls, omittedRolls);
                } else if (rollerKey === 'l5r') {
                    const roller = new L5RRoller(secureRandomNumber, 'l5r');
                    reRoll(roller, (die, face) => new L5RRoll(die, face), selectedRolls, omittedRolls);
                }
            }
            selectedRolls.forEach((elem) => elem.checked = false);
        }
    });
});

function reRoll<R, RS>(
    roller: CanReRoll<R> & Roller<R, RS>,
    diceParser: NumericDieParser<R>,
    selectedRolls: HTMLInputElement[],
    omittedRolls: HTMLInputElement[]
) {
    const reRolls = parseDice(selectedRolls, diceParser);
    const keptRolls = parseDice(omittedRolls, diceParser);
    const reRolledDice = roller.reRoll(keptRolls, reRolls);
    renderNewRoll(roller.formatRolls(reRolledDice));
}

function renderNewRoll(rolls: string) {
    const chatData: ChatData = {
        user: game.user.id,
        content: rolls,
    };
    ChatMessage.create(chatData, {displaySheet: false});
}