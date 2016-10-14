# Udacity stage 2 project by Moritz Krusche
# This has been written for Python 2.7! To work in Python 3.5, all print, string, and input functions need changes!
# London trivia quiz as fill-in-the-blanks
# The programme greets the player and offers three difficulty levels with 9 to 10 answers each.
# Mistakes per blank are limited. There is a warning.
import string


# Greeting and game explanation
print "\nHello and welcome to Moritz' London trivia quiz. You will have to fill in blanks in a short piece of text.\
\nThis quiz has been carefully selected to be both relevant and arbitrarily difficult. There are three difficulty\
 levels.\n"


# This is optional, and allows the player to set their allowed attempts. Alternatively set to e.g. 3.
# max_mistakes=3
max_mistakes = raw_input("How many attempts should you have per blank (1-10)?\n")
while True:
    try:
        max_mistakes = int(max_mistakes)
        if 0 < max_mistakes < 11:
            break
        else:
            max_mistakes = raw_input("Please enter a number between 1 and 10!\n")
    except:
        max_mistakes = raw_input("Please enter a number!\n")


# These are the actual quizzes. They are 4 lines each. quiz1 is easy, quiz2 medium, and quiz3 hard.
quiz1 = "London is the capital of the United Kingdom. As such, it is home to the [.1.], which is located in the palace \
of [.2.].\nElisabeth Tower is world-famous, though most people know it under a different name, namely [.3.].\nInner \
London has the highest productivity per person in the [.4.]. The current Major of London is Mr. [.5.],\nwho is a \
member of the [.6.] party. However, the [.7.] are currently governing the UK as a whole. The conservative \
leader,\nMrs [.8.], wants to restrict the number of [.9.] coming into the UK.\n"

quiz2 = "London was originally founded by the Romans in [.1.]AD, under the name [.2.]. The Tower of London is infamous \
for executions.\nHowever, most of these actually happened close by on [.3.]. Most people nowadays associate the tower \
with the [.4.].\nIn medieval times, however, it was famous for its royal [.5.]. When residing in Buckingham Palace, \
the Queen is protected\nby the [.6.], whose traditional uniforms are often mocked by tourists. The busiest Tube \
station is [.7.],\nused by around 98 million passengers every year. The longest London Underground line is the [.8.] \
line with 60 stations,\nand the [.9.] line is the only line that connects with all the other underground lines.\n"

quiz3 = "Karl Marx worked on his Communist [.1.] while he was in London in the [.2.] pub, in Windmill Street. London \
was also the only\ntrue home that all of the [.3.] shared. They used to live close to [.4.]. [.5.] is named after a\
fair that was held there once a year.\n[.6.] is named after a stiff collar that used to be made by tailors in the \
area.\nOften referred to as being the man that invented electricity, Michael [.7.] was the first person to discover\n\
electromagnetic induction in [.8.]. London was the largest city in the world, until it was overtaken \
by [.9.] in [.10.].\n"


# These are the answer lists. The correct answer is found through the corresponding position in the blank list.
answersquiz1 = ["Parliament", "Westminster", "Big Ben", "world", "Khan", "Labour", "Conservatives", "May", "migrants"]

answersquiz2 = ["50", "Londinium", "Tower Hill", "Crown Jewels", "zoo", "Life Guards", "Oxford Circus", "District",
                "Jubilee"]

answersquiz3 = ["Manifesto", "Red Lion", "Beatles", "Hyde Park", "Mayfair", "Picadilly", "Faraday", "1831", "Tokyo",
                "1957"]


# Creates the appropriate blank depending on the position in the quiz.
def blanks(position):
    blanks = "[." + str(position + 1) + ".]"
    return blanks


# Selecting the appropriate quiz and answer list per chosen difficulty.
def choice(lvl):
    if lvl == "easy":
        return quiz1, answersquiz1
    elif lvl == "medium":
        return quiz2, answersquiz2
    elif lvl == "hard":
        return quiz3, answersquiz3


# This while-loop loops through the answers. It continues when the answer is correct, and quits when
# too many mistakes have been made.
# The position counter is the position in both the blanks and answer list.
def fill_in_quiz(quiz, blanks):
    position = 0
    mistake = 0
    while position < len(solution):
        if mistake == max_mistakes:
            print"\nYou have no attempts left. Game over."
            quit()
        answer = raw_input("Please fill in " + blanks(position) + ":\n")
        # The two .lower operations ensure that user input is not case sensitive.
        ans = answer.lower()
        solutionl = solution[position].lower()
        # Checks if the answer is correct. If so, the blank is filled in and attempts are reset.
        if ans == solutionl:
            print "That is correct.\n"
            # Replaces the blank with the correct answer, the answer comes capitalised from the answer list.
            quiz = string.replace(quiz, blanks(position), solution[position])
            print quiz
            position += 1
            mistake = 0
        else:
            mistake += 1
            print "That is wrong. You have " + str(max_mistakes - mistake) + " attempts left."


# This prompts the player to select the difficulty level and display the appropriate quiz and catches bad input.
def choosing():
    level = raw_input("What difficulty are you ready to face? Easy, medium or hard?\n")
    lvl = level.lower()
    while True:
        if lvl == "easy" or lvl == "medium" or lvl == "hard":
            break
        level = raw_input("Cannot read your input. Easy, medium or hard?\n")
        lvl = level.lower()
    print "You have chosen " + lvl + ". You have " + str(max_mistakes) + " attempts per blank.\n"
    return lvl


# Assign new variables to chosen quiz and answers, so they can be better indexed.
lvl = choosing()
solution = choice(lvl)[1]
quiz = choice(lvl)[0]

# Running the quiz
print quiz
fill_in_quiz(quiz, blanks)

print "Congratulations! You have mastered London Trivia in " + lvl + " difficulty with " + str(
    max_mistakes) + " attempts per blank. "
