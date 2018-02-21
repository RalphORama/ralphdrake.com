# Projects

## [QuoteBot](https://github.com/RalphORama/QuoteBot)

### Accomplishments

I created QuoteBot to solve an issue I had with my main Discord server: a limit on pinned messages per channel. My friends and I have one monolithic text channel that is ~4 years old, but can only pin 50 messages max. QuoteBot allows us to embed messages in another text channel, effectively bypassing the pin limit.

### Notes

- QuoteBot was my first Discord bot that's seen wide adoption. As of writing, QuoteBot has joined 27 servers.
- QuoteBot was my first experience using SQL with Python. Since it was a small project at its conception, I settled on using a SQLite database, but will migrate to a SQL server if/when QuoteBot joins over 100 Discord servers.

## [MCPerms](https://github.com/RalphORama/MCPerms)

### Accomplishments

I started hosting a Minecraft server for a small Discord server I joined. One issue I faced was giving each member permissions in Minecraft based on their roles in the Discord Server. To solve this issue, I created a Discord bot that sent commands to the Minecraft server via my control panel ([Pterodactyl](https://pterodactyl.io/))'s REST API.

### Notes

- I created a partial library to handle interaction with Pterodactyl's API, since no library existed. This library handles authentication, listing of servers, and sending commands to a server.
- Over 20 users from the Discord server used this bot to grant themselves permissions.
- Since the bot authenticates with Minecraft UUIDs and Discord roles, there is no way for a user to acquire permissions they should not have.

## [Norf Entertainment](https://norf.tv/)

### Accomplishments

Norf Entertainment is a multimedia production company created by me and Adrian Anderson. Its members are some of the best friends I made at the first college I attended. We are currently working on creating the first season of our untitled sketch comedy show.

### Notes

- I designed and programmed the current [norf.tv](https://norf.tv) website and am working on a redesign using ReactJS.
- If you are interested in contacting us, send an email to [hello@norf.tv](mailto:hello@norf.tv).

## NAHB SirsiDynix Deprecation

### Accomplishments

As a summer intern for the [National Association of Home Builders](https://www.nahb.org/), I was asked to extract data about the company's physical documents from a SirsiDynix instance and import it into a SharePoint site. When I was first brought up to speed, I was told it would be a matter of data entry rather than programmatic extraction. With my boss' permission, I developed a series of Python scripts over the course of two days that successfully extracted all the data from a MARC 21 database that had previously been stored as an "unknown file."

### Notes

- I reduced the time frame of SirsiDynix deprecation from two months to two days.
- Most of my time spent on this project was learning how to manipulate the MARC 21 data format using Python. I used [pymarc](https://github.com/edsu/pymarc) for my initial transversal, but had to modify the library due to the custom (out-of-spec) fields added by SirsiDynix.

## [SamSchindler.com](http://samschindler.com)

### Accomplishments

I created a website for Sam Schindler, a teacher in activist from my hometown Lancaster, PA. He currently uses this site to host his podcast, *What We Will Abide*. He also uses the site to distribute information about *Nora Bear & the Outlaw*, a talk show starring his children, along with his work for Stone Independent, an independent school based in Lancaster, PA.

### Notes

- I created an initial version of this site from scratch using Bootstrap before switching to the current WordPress installation to simplify the content update process for Mr. Schindler.
- Using Wordpress' built in RSS feed generator, Mr. Schindler is able to publish his podcast to iTunes after uploading a new episode to his website.
- Since finalizing the current Wordpress installation, Mr. Schindler has become almost self-sufficient, thanks to the simplicity of the backend.

## Manheim Township CoderDojo

### Accomplishments

I volunteered at the Manheim Township CoderDojo from 2015 to 2016. During my time there, I taught kids aged eight to fourteen how to program JavaScript. This volunteer work was some of the most fun I've had, mostly thanks to how wacky and fun kids that age are.

### Notes

- A lot of the initial learning was self-guided using online programming games like LightBot and services like Codecademy.
- I still keep up with a few of the kids I mentored while working at the CoderDojo, as they continue to create awesome and interesting projects.
- Some of my supervisors at the Dojo were professionals in the Lancaster tech industry - I made sure to pick their brains for educational and professional opportunities.

## Small Projects

I've worked on quite a few small projects in my time, usually as exercises to learn new programming languages. Here's a few examples of what I've created:

#### [ThreeFiveSeven](https://github.com/RalphORama/ThreeFiveSevenGame)

This game was inspired by two things: the whiteboard version we played in Calculus class, and my desire to learn GUI manipulation in Java. I programmed this game over the course of a week, and submitted it for extra credit in my AP Computer Science class. I'm fairly proud of how it turned out, but I never got any of my math classmates to play it.

#### [Chars that Matter](https://github.com/RalphORama/chars-that-matter)

I first started working on Chars that Matter in an ID Tech Camp session during the summer of 2013. The camp/course was a one-week introduction to C++, which I had a great time participating in. I saved the source code in my Google Drive, and tinkered with it on and off for a few years.

I decided to come back and finish Chars during my first semester of college as my final project for *Intro to Programming*. I updated the logic to use dynamically allocated arrays, header files, and a library that allowed me to create my levels by reading a JSON file.
