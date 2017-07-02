import webbrowser

# class to create instances of movies displayed on the web page
class Movie():
    """
    This class provides a way to store movie-related information; (1) movies title, (2) short storyline,
    (3) poster image url and (4) youtube trailer url. Poster is displayed via deeplink; trailer shown on click.
    """
    def __init__(self, movie_title, movie_storyline, poster_image, trailer_youtube):
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

# opens a trailer of the movie when it's label is clicked through a popup on the same page.
    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)