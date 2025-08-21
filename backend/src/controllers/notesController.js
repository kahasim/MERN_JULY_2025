export function getAllNotes(req, res) {
    res.send("You just fetched the notes")
}

export function createNote(req, res){
    res.send(201).json({message:"post created successfully"})
}

export function updateNote(req, res){
    res.send(200).json({message:"post created successfully"})
}

export function deleteNote(req, res){
    res.send(200).json({message:"post deleted successfully"})
}