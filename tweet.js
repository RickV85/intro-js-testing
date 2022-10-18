class Tweet {
    constructor(sender, content, link ='no link provided',
     likes = 0, retweets = 0, replies = [], replyCount = 0) {
        this.sender = sender;
        this.content = content;
        this.link = link;
        this.likes = likes;
        this.retweets = retweets;
        this.replies = replies;
        this.replyCount = replyCount;
    }
    like() {
        return this.likes += 1;
    }
    retweet() {
        return this.retweets += 1;
    }
    reply(reply) {
        this.replyCount += 1;
        return this.replies.push(reply);
    }
}

module.exports = Tweet;
