import {IMonoid} from '../lang';
import {Roll} from '../roller';

export enum Dice {
  HEXXEN,
  JANUS,
  SEGNUNG,
  BLUT,
  ELIXIR,
  FLUCH,
}

export enum Faces {
  ERFOLG,
  ESPRITSTERN,
  LEER,
  DOPPELKOPF,
  DOPPELERFOLG,
  BLUT_EINS,
  BLUT_ZWEI,
  BLUT_DREI,
  ELIXIR_EINS,
  ELIXIR_ZWEI,
  ELIXIR_DREI,
  ELIXIR_VIER,
  ELIXIR_FUENF,
  FLUCH_EINS,
  FLUCH_ZWEI,
  FLUCH_DREI,
  FLUCH_VIER,
  FLUCH_FUENF,
}

export const HEXXEN_ROLL_TABLE: Faces[] = [
  Faces.ESPRITSTERN,
  Faces.LEER,
  Faces.LEER,
  Faces.LEER,
  Faces.ERFOLG,
  Faces.ERFOLG,
];

export const JANUS_ROLL_TABLE: Faces[] = [
  Faces.LEER,
  Faces.LEER,
  Faces.LEER,
  Faces.DOPPELKOPF,
  Faces.DOPPELKOPF,
  Faces.DOPPELKOPF,
];

export const SEGNUNG_ROLL_TABLE: Faces[] = [
  Faces.ESPRITSTERN,
  Faces.ESPRITSTERN,
  Faces.LEER,
  Faces.ERFOLG,
  Faces.ERFOLG,
  Faces.DOPPELERFOLG,
];

export const BLUT_ROLL_TABLE: Faces [] = [
  Faces.LEER,
  Faces.BLUT_EINS,
  Faces.BLUT_EINS,
  Faces.BLUT_ZWEI,
  Faces.BLUT_ZWEI,
  Faces.BLUT_DREI,
];

export const ELIXIR_ROLL_TABLE: Faces [] = [
  Faces.ELIXIR_EINS,
  Faces.ELIXIR_ZWEI,
  Faces.ELIXIR_DREI,
  Faces.ELIXIR_VIER,
  Faces.ELIXIR_FUENF,
  Faces.ELIXIR_DREI,
];

export const FLUCH_ROLL_TABLE: Faces [] = [
  Faces.FLUCH_EINS,
  Faces.FLUCH_ZWEI,
  Faces.FLUCH_DREI,
  Faces.FLUCH_VIER,
  Faces.FLUCH_FUENF,
  Faces.FLUCH_DREI,
];

export class DicePool {
  constructor(
    public HEXXEN: number = 0,
    public JANUS: number = 0,
    public SEGNUNG: number = 0,
    public BLUT: number = 0,
    public ELIXIR: number = 0,
    public FLUCH: number = 0,
  ) {
  }

  public toString(): string {
    return `HeXXenwürfel: ${this.HEXXEN}, Januswürfel: ${this.JANUS}, Segnungswürfel: ${this.SEGNUNG}, Blutwürfel: ${this.BLUT}, Elixirwürfel: ${this.ELIXIR}, Fluchwürfel: ${this.FLUCH}`;
  }
}

export class RollValues {
  constructor(
    public ERFOLGE: number = 0,
    public ESPRIT: number = 0,
    public JANUS: number = 0,
    public BLUT: number = 0,
    public ELIXIR: number = 0,
    public FLUCH: number = 0,
  ) {
  }
}

const HEXXENImages = new Map<Faces, string>();
HEXXENImages.set(Faces.ESPRITSTERN, 'hesprit');
HEXXENImages.set(Faces.LEER, 'hblank');
HEXXENImages.set(Faces.ERFOLG, 'herfolg');

const JANUSImages = new Map<Faces, string>();
JANUSImages.set(Faces.LEER, 'jblank');
JANUSImages.set(Faces.DOPPELKOPF, 'jdoppelkopf');

const SEGNUNGImages = new Map<Faces, string>();
SEGNUNGImages.set(Faces.ESPRITSTERN, 'sesprit');
SEGNUNGImages.set(Faces.LEER, 'sblank');
SEGNUNGImages.set(Faces.ERFOLG, 'serfolg');
SEGNUNGImages.set(Faces.DOPPELERFOLG, 'sdoppelerfolg');

const BLUTImages = new Map<Faces, string>();
BLUTImages.set(Faces.LEER, 'bblank');
BLUTImages.set(Faces.BLUT_EINS, 'beins');
BLUTImages.set(Faces.BLUT_ZWEI, 'bzwei');
BLUTImages.set(Faces.BLUT_DREI, 'bdrei');

const ELIXIRImages = new Map<Faces, string>();
ELIXIRImages.set(Faces.ELIXIR_EINS, 'eeins');
ELIXIRImages.set(Faces.ELIXIR_ZWEI, 'ezwei');
ELIXIRImages.set(Faces.ELIXIR_DREI, 'edrei');
ELIXIRImages.set(Faces.ELIXIR_VIER, 'evier');
ELIXIRImages.set(Faces.ELIXIR_FUENF, 'efuenf');

const FLUCHImages = new Map<Faces, string>();
FLUCHImages.set(Faces.FLUCH_EINS, 'feins');
FLUCHImages.set(Faces.FLUCH_ZWEI, 'fzwei');
FLUCHImages.set(Faces.FLUCH_DREI, 'fdrei');
FLUCHImages.set(Faces.FLUCH_VIER, 'fvier');
FLUCHImages.set(Faces.FLUCH_FUENF, 'ffuenf');

export const dieRollImages = new Map<Dice, Map<Faces, string>>();
dieRollImages.set(Dice.HEXXEN, HEXXENImages);
dieRollImages.set(Dice.JANUS, JANUSImages);
dieRollImages.set(Dice.SEGNUNG, SEGNUNGImages);
dieRollImages.set(Dice.BLUT, BLUTImages);
dieRollImages.set(Dice.ELIXIR, ELIXIRImages);
dieRollImages.set(Dice.FLUCH, FLUCHImages);

const rollToRollResultMapping = new Map<Faces, Partial<RollValues>>();
rollToRollResultMapping.set(Faces.ERFOLG, {ERFOLGE: 1});
rollToRollResultMapping.set(Faces.DOPPELERFOLG, {ERFOLGE: 2});
rollToRollResultMapping.set(Faces.ESPRITSTERN, {ESPRIT: 1});
rollToRollResultMapping.set(Faces.DOPPELKOPF, {JANUS: 1});
rollToRollResultMapping.set(Faces.BLUT_EINS, {BLUT: 1});
rollToRollResultMapping.set(Faces.BLUT_ZWEI, {BLUT: 2});
rollToRollResultMapping.set(Faces.BLUT_DREI, {BLUT: 3});
rollToRollResultMapping.set(Faces.ELIXIR_EINS, {ELIXIR: 1});
rollToRollResultMapping.set(Faces.ELIXIR_ZWEI, {ELIXIR: 2});
rollToRollResultMapping.set(Faces.ELIXIR_DREI, {ELIXIR: 3});
rollToRollResultMapping.set(Faces.ELIXIR_VIER, {ELIXIR: 4});
rollToRollResultMapping.set(Faces.ELIXIR_FUENF, {ELIXIR: 5});
rollToRollResultMapping.set(Faces.FLUCH_EINS, {FLUCH: 1});
rollToRollResultMapping.set(Faces.FLUCH_ZWEI, {FLUCH: 2});
rollToRollResultMapping.set(Faces.FLUCH_DREI, {FLUCH: 3});
rollToRollResultMapping.set(Faces.FLUCH_VIER, {FLUCH: 4});
rollToRollResultMapping.set(Faces.FLUCH_FUENF, {FLUCH: 5});

export function interpretResult(result: RollValues): RollValues {
    return new RollValues(
        result.ERFOLGE,
        result.ESPRIT,
        result.JANUS,
        result.BLUT,
        result.ELIXIR,
        result.FLUCH,
    );
}

export function parseRollValues(roll: Roll<Dice, Faces>): RollValues {
    const result = rollToRollResultMapping.get(roll.face);
    if (result !== undefined) {
        return toRollResult(result);
    } else {
        throw new Error(`Unhandled Face ${roll.face}`);
    }
}

function toRollResult(partial: Partial<RollValues>): RollValues {
    return Object.assign(new RollValues(), partial);
}

export const rollValuesMonoid: IMonoid<RollValues> = {
    identity: new RollValues(),
    combine: (roll1: RollValues, roll2: RollValues) => new RollValues(
        roll1.ERFOLGE + roll2.ERFOLGE,
        roll1.ESPRIT + roll2.ESPRIT,
        roll1.JANUS + roll2.JANUS,
        roll1.BLUT + roll2.BLUT,
        roll1.ELIXIR + roll2.ELIXIR,
        roll1.FLUCH + roll2.FLUCH,
    ),
};

export const dicePoolMonoid: IMonoid<DicePool> = {
    identity: new DicePool(),
    combine: (roll1: DicePool, roll2: DicePool) => new DicePool(
        roll1.HEXXEN + roll2.HEXXEN,
        roll1.JANUS + roll2.JANUS,
        roll1.SEGNUNG + roll2.SEGNUNG,
        roll1.BLUT + roll2.BLUT,
        roll1.ELIXIR + roll2.ELIXIR,
        roll1.FLUCH + roll2.FLUCH,
    ),
};
