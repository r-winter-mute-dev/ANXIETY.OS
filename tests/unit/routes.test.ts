import { describe, expect, it } from 'vitest';
import { afterSafety, anxietyIncreased, EXERCISE_ORDER, HIDE_EMERGENCY_BAR, NEED_TO_EXERCISE, orderSymptoms } from '../../src/lib/routes';

describe('Ablauflogik', () => {
  it('Sicherheitsfrage: "ja/unsicher" führt immer zur Hilfe', () => {
    expect(afterSafety('yes')).toBe('emergency');
    expect(afterSafety('no')).toBe('ratingPre');
  });

  it('Adaptionsprinzip (Konzept 6.1, Körperfokus → Körpersignale)', () => {
    expect(NEED_TO_EXERCISE).toEqual({
      thoughts: 'reframe',
      body: 'symptoms',
      breath: 'breathing',
      overwhelm: 'simple',
    });
  });

  it('Atemhilfe wird nicht als erste Übung angeboten', () => {
    expect(EXERCISE_ORDER[0]).not.toBe('breathing');
    expect(new Set(EXERCISE_ORDER)).toEqual(new Set([...Object.values(NEED_TO_EXERCISE), 'grounding', 'distract']));
  });

  it('Notfall-Leiste ist nur auf dem Hilfe-Bildschirm ausgeblendet', () => {
    expect([...HIDE_EMERGENCY_BAR]).toEqual(['emergency']);
  });

  it('Anstieg wird nur bei zwei Werten erkannt', () => {
    expect(anxietyIncreased(4, 6)).toBe(true);
    expect(anxietyIncreased(6, 4)).toBe(false);
    expect(anxietyIncreased(5, 5)).toBe(false);
    expect(anxietyIncreased(null, 8)).toBe(false);
  });

  it('Brustschmerz wird immer zuerst erklärt, Reihenfolge folgt der Vorgabe', () => {
    const order = ['brust', 'atem', 'schwindel', 'bauch'];
    expect(orderSymptoms(['bauch', 'brust', 'schwindel'], order)).toEqual(['brust', 'schwindel', 'bauch']);
    expect(orderSymptoms(['unbekannt'], order)).toEqual([]);
  });
});
