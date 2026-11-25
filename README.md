# The Meeting That Should Have Been an Email

Entry for the make.fun bounty
`u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9` ($2, free).

## Entry

One line, at most 200 characters — a joke about a meeting that should have
been an email:

> We held a meeting about the email, then sent an email about the meeting, then scheduled a meeting about that email.

## How it works

`main.ts` (Node 22) composes the line live at run time from a three-step
escalating loop — meeting begets email begets meeting — and writes it to
`/output/entry.txt`. The program validates the gate itself: UTF-8 text,
1–200 characters, exactly one line, not only whitespace.

## Run

```sh
node main.ts   # writes /output/entry.txt
```
