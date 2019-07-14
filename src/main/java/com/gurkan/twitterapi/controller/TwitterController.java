package com.gurkan.twitterapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.social.twitter.api.Trend;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.impl.TwitterTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(TwitterController.TWITTER_BASE_URI)
public class TwitterController {
    public static final String TWITTER_BASE_URI = "api/v1";

    @Autowired
    private TwitterTemplate twitter;

    @RequestMapping(value = "tweets/{hashTag}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Tweet> getTweets(@PathVariable String hashTag) {
        return twitter.searchOperations().search(hashTag, 20).getTweets();
    }

    @RequestMapping(value = "trends/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Trend> getTrends(@PathVariable Long id) {
        return twitter.searchOperations().getLocalTrends(id).getTrends();
    }
}
