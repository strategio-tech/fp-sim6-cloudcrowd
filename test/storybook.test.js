import { truncate } from '../helpers/hbs'
import { formatDate } from '../helpers/hbs'
import { stripTags } from '../helpers/hbs'
import { editIcon } from '../helpers/hbs'
import { select } from '../helpers/hbs'

import { expect } from '@jest/globals'

describe('test storybooks', () => {
  test('test formatDate', () => {
    expect(formatDate('2018-01-01 12:00:00', 'YYYY-MM-DD')).toBe('2018-01-01')
  })

  test('test truncate', () => {
    expect('abcd').toBe(truncate('abcd', 5))
    expect('abcd').toBe(truncate('abcd', 5))
    expect('abcde' + '...').toBe(truncate('abcde' + '...', 5))
    expect('abcde' + '...').toBe(truncate('abcde' + '...', 5))
    expect('abcde' + '...').toBe(truncate('abcdef', 5))
    expect('abcde' + '...').toBe(truncate('abcdef', 5))
    expect('abcde' + '...').toBe(truncate('abcdefg', 5))
    expect('abcde' + '...').toBe(truncate('abcdefg', 5))
    expect('abcde' + '...').toBe(truncate('abcdefgh', 5))
    expect('abcde' + '...').toBe(truncate('abcdefgh', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghi', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghi', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghij', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghij', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijk', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijk', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijkl', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijkl', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklm', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklm', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmn', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmn', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmno', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmno', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnop', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnop', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopq', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopq', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqr', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqr', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrs', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrs', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrst', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrst', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstu', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstu', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuv', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuv', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvw', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvw', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwx', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwx', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwxy', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwxy', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwxyz', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwxyz', 5))
    expect('abcde' + '...').toBe(truncate('abcdefghijklmnopqrstuvwxyz', 5))
  })

  test('test stripTags', () => {
    expect(stripTags('<p>hello</p>')).toBe('hello')
  })

  test('test editIcon', () => {
    let storyUser = {
      _id: 'test',
    }

    let loggedUser = {
      _id: 'test',
    }

    let storyId = 1
    let floating = true
    let result = editIcon(storyUser, loggedUser, storyId, floating)
    expect(result).toBe(
      `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
    )
  })

  test('test select', () => {
    let result = select('test', {
      fn: function () {
        return '<option value="test">test</option><option value="test1">test1</option>'
      },
    })

    expect(result).toBe(
      '<option value="test" selected="selected" selected="selected">test</option><option value="test1">test1</option>'
    )
  })
})
