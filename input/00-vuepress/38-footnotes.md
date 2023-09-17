# Footnotes

Related Issue: https://github.com/about-code/glossarify-md/issues/38

GIVEN input with *Footnotes* syntax THEN actual glossarify-md output MUST be equal to glossarify-md input

**Input**

~~~
This is a text with a footnote [^footnote].
~~~
This is a text with a footnote [^footnote].


**Expected Output (Markdown)**

~~~
[^footnote]: Footnote Definition
~~~

**Actual Output (Markdown & Rendered)**

[^footnote]: Footnote Definition
