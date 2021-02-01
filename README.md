## Before Running

- Add the **.env** file to the project's root folder

- Run `yarn install` to install necessary dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the server on port 5000.

# Seniorly exercise

This exercise has a very simple premise. You like Twitter a lot, so you have
decided to create a web app optimized for mobile with an infinite scroll to show
the tweets of your favourite twitter accounts.

The app has a single screen that is composed of two main components:

1.- A sticky menu with your two favourite twitter accounts
2.- The stream of tweets in a list with an infinite scroll

## The Menu

Imagine a menu with two handles, for example [@POTUS, @elonmusk], this
menu must stay at the top of the visible window (sticky), if the user taps in
the other handle, the list is replaced by the new list. If the user taps in the
current selected handle, the list should scroll all the way up to the latest
tweet.

You can choose any component for the options of the menu, links, buttons, links
that look like buttons, etc.

## The tweet stream

The api will give you 20 tweets at a time. When then user has scrolled down
_close_ to the oldest tweet in the list, the app should fetch the next 20,
behaving like an infinite scroll.

You can choose what data from the api could be nice to have, may be images if
they come with the tweet, date, picture of the twitter user account, etc.

Remember that this is a mobile optimized app, so it should be very confortable
to scroll with the swiping gesture.

## Tech

You can choose any tech you like but we are looking for a React dev, you can use
any starter scripts and build tools you wish, you can leverage any libraries you
want for the scrolling, swiping, sticky header, etc. But while we don't want you
to spend an very big amount of time in the exercise, at least one of the main
problems of the exercise should be solved by yourself, so we can see some
reasoning behind it.

Everything should be unit tested.

## Api usage

Uncompress the zip file and install the node modules

npm install

Put twitter keys and secrets inside index.js and run

npm start

You can generate keys and tokens in the Twitter developer portal:

https://developer.twitter.com/en/apps

following this instructions:

https://developer.twitter.com/en/docs/basics/authentication/guides/securing-keys-and-tokens

Then you can start to ping the url like this:

http://localhost:3000/:handle[?max_id=...]

For example

http://localhost:3000/POTUS?max_id=1028275158342098944

Where max_id is the newest tweet to show, this is normally the latest tweet
id_str attribute in the previous request, take into account that there is always
a duplicate tweet doing it like this.

## Expected deliverable

A zip or a github repo minus the keys and the secrets (also removed from the
commit history if they ever got leaked). And instructions to run the project.

Thank you very much for accepting the challenge. Have fun!
