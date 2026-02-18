#NAME: ANSHIKA SHRIVASTAVA
#REGISTRATION NUMBER: 23BAI10033

import nltk                                  # Natural Language Toolkit
from nltk.tokenize import word_tokenize      # For splitting sentence into words
from nltk.corpus import stopwords            # Stopword dictionary
from nltk.stem import WordNetLemmatizer      # For root word detection

# These datasets contain tokenization rules, word dictionary and stopwords
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')

# INITIALIZE NLP TOOLS
lemmatizer = WordNetLemmatizer()                # Object to perform lemmatization
stop_words = set(stopwords.words('english'))    # Convert stopword list to set (fast lookup)

text = "The students were studying happiness and replaying recorded lectures." #INPUT CORPUS

# STEP 1 — TOKENIZATION: Break the sentence into individual words
tokens = word_tokenize(text)

# STEP 2 — LOWERCASE + REMOVE PUNCTUATION: Convert words to lowercase and remove punctuation using isalpha()
tokens = [word.lower() for word in tokens if word.isalpha()]

# STEP 3 — STOPWORD REMOVAL: Remove grammatical helper words (the, is, were, and etc.)
filtered_words = [word for word in tokens if word not in stop_words]

# KNOWLEDGE BASE: PREFIXES AND SUFFIXES:Rule-based morphology, Common English prefixes
prefixes = ['re', 'un', 'dis', 'pre', 'post', 'mis', 'non']

# Inflectional suffixes (change tense/plural but not meaning)
inflectional_suffixes = ['s', 'es', 'ed', 'ing']

# Derivational suffixes (change meaning or POS)
derivational_suffixes = ['ness', 'ly', 'ment', 'ful', 'less', 'er', 'ion', 'al']

# FUNCTION: PREFIX DETECTION- Checks whether a word starts with a known prefix
def detect_prefix(word):
    for p in prefixes:
        # ensure prefix is meaningful (minimum root length remains)
        if word.startswith(p) and len(word) > len(p) + 2:
            return p
    return None

# FUNCTION: SUFFIX DETECTION- Returns inflectional and derivational suffix separately
def detect_suffix(word):

    inflect = None
    deriv = None

    # check inflectional suffixes
    for s in inflectional_suffixes:
        if word.endswith(s):
            inflect = s

    # check derivational suffixes
    for s in derivational_suffixes:
        if word.endswith(s):
            deriv = s

    return inflect, deriv


# FUNCTION: MORPHOLOGICAL CLASSIFICATION- Determines type of morphological formation
def classify(inflect, deriv):

    if inflect and deriv:
        return "Both"            # contains both types
    elif deriv:
        return "Derivational"    # meaning changed
    elif inflect:
        return "Inflectional"    # grammar changed
    else:
        return "Root"            # base word

# MORPHOLOGICAL ANALYSIS
print("\n================ MORPHOLOGICAL ANALYSIS RESULT ================\n")

# Print formatted table header
print(f"{'Word':<12}{'Lemma':<12}{'Prefix':<10}{'Suffix':<12}{'Type'}")
print("-"*60)

# Process each filtered word
for word in filtered_words:

    # -------- Lemmatization --------
    # Extract root/base word
    lemma = lemmatizer.lemmatize(word)

    # -------- Prefix Detection -----
    prefix = detect_prefix(word)

    # -------- Suffix Detection -----
    inflect, deriv = detect_suffix(word)

    # choose suffix to display
    suffix = inflect if inflect else deriv

    # -------- Classification -------
    word_type = classify(inflect, deriv)

    # -------- Structured Output ----
    print(f"{word:<12}{lemma:<12}{str(prefix):<10}{str(suffix):<12}{word_type}")

print("\n===============================================================")
