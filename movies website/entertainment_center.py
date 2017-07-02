import media
import fresh_tomatoes

# six instances of the class movie, as defined in media.py
toy_story = media.Movie("Toy Story",
                        "A story of a boy and his toys that come to life.",
                        "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        "https://www.youtube.com/watch?v=vwyZH85NQC5")

avatar = media.Movie("Avatar",
                     "A marine on an alien planet.",
                     "http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg",
                     "http://www.youtube.com/watch?v=-9ceBgWV8io")

the_shining = media.Movie("The Shining",
                          "A family spends the winter alone in a hotel. Scary things happen.",
                          "https://upload.wikimedia.org/wikipedia/en/2/25/The_Shining_poster.jpg",
                          "https://www.youtube.com/watch?v=3b726feAhdU")

the_godfather = media.Movie("The Godfather",
                            "In 1945, just after WW2, things go well for the Corleone crime family, \
                            until the family head 'Don Vito Corleone' has to step back after a borched \
                            assasination attempt leaves him unable to keep running the business. A brutal \
                            war with rival families ensues. Widely regarded as one of the best movies of all time.",
                            "https://vignette1.wikia.nocookie.net/godfather/images/2/2c/The_Godfather_Game.jpeg/revision/latest?cb=20131009061406",
                            "https://www.youtube.com/watch?v=y4CDkYMCJ0I")

the_empire_strikes_back = media.Movie("The Empire Strikes Back",
                            "In a galaxy far, far away a group of fearless rebels fight against the evil and tyrannical \
                            Galactic Empire. Previously, they managed to destroy the Empire's ultimate weapon, the DEATH STAR, \
                            in a brave onslaught. Many rebels lost their lives, however, and the Empire seeks revenge. Can they \
                            prevail, and save the Galaxy from Darkness?",
                            "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
                            "https://www.youtube.com/watch?v=8Hm-9Sai9To")

rogue_one = media.Movie("Rogue One",
                        "In the same galaxy, far, far away and about 25 years before the events of Empire, a tough and diverse \
                        group of rebels engages in the suicidal mission of stealing the plans for the DEAT STAR, and uncovering \
                        the secret flaw that later allows for its destruction. There are women and minorities in the cast, and \
                         hence Donald Trump's fans did not like this movie.",
                        "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
                        "https://www.youtube.com/watch?v=frdj1zb9sMY")



# putting the instances in a list; and through fresh tomatoes  these are then automatically put onto a web page.
movies= [toy_story, avatar, the_shining, the_godfather, the_empire_strikes_back, rogue_one]
fresh_tomatoes.open_movies_page(movies)
