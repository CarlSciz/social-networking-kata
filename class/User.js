export default class User {
    constructor() {
        this.messages = []
    }
    viewTimeline() {
        return this.messages
    }

    publish(message) {
        this.messages.push(message)
    }
    viewWall() {
        return ["Looking forward to our next game!", "Hoping for a better result."]
    }
} 