import { expect } from 'chai'
import User from '../class/User'

describe("Social Networking Kata Tests", () => {
    describe("Publishing", () => {
        it("Alice views blank timeline", () => {
            const alice = new User()

            const result = alice.viewTimeline()
            const expectedResult = []

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Alice published "I love the weather today", when she views her timeline, she sees "I love the weather today"`, () => {
            const alice = new User()
            const message = "I love the weather today"

            alice.publish(message)

            const result = alice.viewTimeline();
            const expectedResult = [message]

            expect(result).to.deep.equal(expectedResult)
        })

        it('Bob published "Darn! We lost!", when he views his timeline, he sees "Darn! We lost!"', () => {
            const bob = new User()
            const message = "Darn! We lost!"

            bob.publish(message)

            const result = bob.viewTimeline();
            const expectedResult = [message]

            expect(result).to.deep.equal(expectedResult)
        })

        it('Bob published "Darn! We lost!" and "Good game though.", when he views his timeline, he sees "Darn! We lost!" and "Good game though."', () => {
            const bob = new User()
            const message = "Darn! We lost!"
            const message2 = "Good game though"

            bob.publish(message)
            bob.publish(message2)

            const result = bob.viewTimeline();
            const expectedResult = [message, message2]

            expect(result).to.deep.equal(expectedResult)
        })
    })

    describe("Timeline", () => {
        it(`Bob publishes "Looking forward to our next game!", then publishes "Hoping for a better result.", Alice views his timeline and sees "Looking forward to our next game!" and "Hoping for a better result."`, () => {
            const bob = new User()
            const alice = new User()

            const post1 = "Looking forward to our next game!"
            const post2 = "Hoping for a better result."

            bob.publish(post1)
            bob.publish(post2)

            const result = alice.viewWall(bob)
            const expectedResult = [post1, post2]

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Alice publishes "Wishing for more sun.", then publishes "Thankful spring is right around the corner!", Bob views Alice's timeline and sees "Wishing for more sun" and "Thankful spring is right around the corner!"`, () => {
            const bob = new User()
            const alice = new User()

            const post1 = "Wishing for more sun."
            const post2 = "Thankful spring is right around the corner!"

            alice.publish(post1)
            alice.publish(post2)

            const result = bob.viewWall(alice)
            const expectedResult = [post1, post2]

            expect(result).to.deep.equal(expectedResult)
        })
    })
}) 