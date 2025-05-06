function showContent(subject) {
    let summaries = {
        biologia: "Conteúdos: Ecologia, Evolução, Genética, Citologia.",
        portugues: "Conteúdos: Literatura, Gramática, Produção Textual, Redação.",
        quimica: "Conteúdos: Química Orgânica, Eletroquímica, Termoquímica.",
        fisica: "Conteúdos: Mecânica, Ondas, Eletromagnetismo, Termodinâmica.",
        historia: "Conteúdos: Brasil República, Revoluções, História Mundial."
    };

    document.getElementById('content').innerHTML = summaries[subject] || "Selecione uma disciplina.";
}
