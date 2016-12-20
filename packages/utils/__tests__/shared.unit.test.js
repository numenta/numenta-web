import {
  getModalWidth, getVideoIdFromUrl, stampUrl, trims,
} from '../lib/shared'


describe('Shared Client+Server helper utils', () => {

  describe('getEventTimeDisplay()', () => {
    it('Gets event datetime display', () => {
      // expect(getEventTimeDisplay(when)).toContain()
    })
  })

  describe('getModalWidth()', () => {
    it('Gets default width of modal', () => {
      expect(getModalWidth()).toBe(360)
    })
  })

  describe('getVideoIdFromUrl()', () => {
    it('Gets Video ID from Video URL', () => {
      expect(getVideoIdFromUrl('http://youtu.be/abc123')).toContain('abc123')
    })
  })

  // describe('sortDateAscend()', () => {
  //   it('Sorts by Date in ascending order', () => {
  //     expect().toContain()
  //   })
  // })

  // describe('sortDateDescend()', () => {
  //   it('Sorts by Date in descending order', () => {
  //     expect().toContain()
  //   })
  // })

  describe('stampUrl()', () => {
    it('Stamps a cache-buster version number on a URL string', () => {
      expect(stampUrl('http://numenta.com/', '0.2.43')).toContain('0.2.')
    })
  })

  describe('trims()', () => {
    it('Trims multi-line es6 template strings', () => {
      expect(trims`Hello world.
                   How are you?`)
        .toContain('Hello world. How are you?')
    })
  })

})
