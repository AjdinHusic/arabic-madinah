import React from "react";
import SectionPage from "../../../components/SectionPage";
import Paper from "@material-ui/core/Paper";
import QuizComponent from "../../../components/Quiz";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../../styles";

type Answer = "the book" | "a pen" | "the pen" | "books";
const answers: Answer[] = ["the book", "a pen", "the pen", "books"];
const correct: Answer = "the book";


export function DefinitenessOfNouns({classes}: WithStyles<typeof styles>) {
    return (
        <SectionPage>
            <h2>1.2 Definiteness of Nouns</h2>
            <div>
                <p>
                    A noun in Arabic is either <i>definite</i> or <i>indefinite</i>. When a noun is definite,
                    it indicates that it is a reference to something known or <i>identifiable</i> in a particular context.
                </p>

                <p>
                    In English, when we say "the house" it expresses an identifiable house that we are talking about,
                    whereas when we say "a house" it does not, and can mean <i>any</i> house or simply a house
                    unknown to the audience.
                </p>

                <p>
                    This difference in English occurs when we use a definite article ("the")
                    vs an indefinite one ("a/an").
                    Similarly, there exists a definite article in Arabic to indicate a definite noun.
                </p>

                <p>
                    To determine whether a noun is definite or indefinite in Arabic, we look at the vowel signs on the last consonant.

                    If the last consonant contains double vowel signs, i.e. tanween <span className="arabic text-small">(تَنْوِين)</span>, it is indefinite.
                    Examples of indefinite nouns are
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li><b>a</b> book - <span className="arabic text-small">كِتَابٌ</span></li>
                        <li><b>a</b> pen - <span className="arabic text-small">قَلَمٌ</span></li>
                        <li><b>a</b> house - <span className="arabic text-small">بَيْتٌ</span></li>
                    </ul>
                </Paper>
                <p>
                    It the noun contains only one vowel sign, it is definite.
                    The definite article <i>"The"</i> is equivalent to the prefix <span className="arabic text-small">ال</span>
                    in Arabic, which is attached before the noun.

                    examples of definite nouns are:
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li><b>the</b> book - <span className="arabic text-small">الْكِتَابُ</span></li>
                        <li><b>the</b> house - <span className="arabic text-small">الْبَيْتُ</span></li>
                    </ul>
                </Paper>
                <p>
                    Notice the single vowel at the end denoting the definiteness of the noun.

                    An exception to the rule is with proper nouns (names).
                    They are definite and yet may contain double vowel signs:
                </p>
                <Paper elevation={2} style={{width: "50%", margin: "20px auto", padding: "10px 10px"}}>
                    <ul>
                        <li>Muhammed - <span className="arabic text-small">مُحَمَّدٌ</span></li>
                        <li>Ali - <span className="arabic text-small">عَلِي</span></li>
                    </ul>
                </Paper>
                <p>
                    These are all definite nouns.
                </p>
            </div>

            <QuizComponent
                classes={classes}
                title={"Quiz lesson 1.2: Definite vs Indefinite"}
                task={"Select the correct translation."}
                subject={"الْكِتَابُ"}
                answers={answers} correct={correct} />
        </SectionPage>
    )
}