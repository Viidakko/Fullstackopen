```mermaid
sequenceDiagram
	participant browser
	participant server	

	Note right of browser: Browser adds the new note to the list of notes, redraws the list of notes on the page and then sends it to the server
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
```
