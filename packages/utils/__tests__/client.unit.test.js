import {getBrowserWidth, hasSessionStorage} from '../lib/client'


describe('Client helper utils', () => {

  describe('getBrowserWidth()', () => {
    it('Gets browser width', () => {
      expect(getBrowserWidth()).toBe(640)
    })
  })

  describe('hasSessionStorage()', () => {
    it('Returns false', () => {
      expect(hasSessionStorage()).toBe(false)
    })
  })

  // describe('scrollToSection()', () => {
    // it('Scrolls to a section', () => {
      // expect(scrollToSection(X)).toBe()
    // })
  // })

  // describe('triggerGAnalyticsEvent()', () => {
    // it('Triggers a GoogleAnalytics custom event', () => {
      // expect(triggerGAnalyticsEvent()).toBe()
    // })
  // })

})
