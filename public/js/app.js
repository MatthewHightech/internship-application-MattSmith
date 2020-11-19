let lastElement; 
// Function: Sets the html of the id="text" element based on which question is asked, identified by the param
// Param: id for specified question
function question(q, element) {
     
    if (lastElement != null) {
        lastElement.style.background = "#222428";
    }
    lastElement = element;

    let content = ""; 
    switch(q) {
        case 1: content = "Working for HighTechU would give me a chance to further help my local community by working with a team that passionately supports Victoria's youth pursuing a future in technology. Having recently grown in my own career as a software developer, I feel well-qualified to provide high school students with the relevant tools to put them on a path of success. Not only will this position build my own skills as a developer, but give me a platform to equip future innovators."; break; 
        case 2: content = "Due to my limited course load at the moment (having only Physics 12) I would be able to dedicate the full 20 hours, most weeks from November 30th to December 18th (though I couldn't work/meet between 9 and 11:30 am). After Dec. 18th, I would be able to consistently deliver anything up to the maximum of 20 hours a week since I'll no longer be in school. "; break; 
        case 3: content = "I hope to gain the opportunity to collaborate with like-minded innovators and progress my communication skills to an advanced level. Furthermore, I will gain the essential experience of developing a project in a scrum team while practicing industry standards. Finally, this experience will help solidify my technical knowledge and introduce me to even more programming techniques. This internship will let me apply the skills I've been building over the last few years to a meaningful vision."; break; 
        case 4: content = "From the self-reflecting I've done in the past, I forsee a balanced schedule being the most difficult aspect of taking on this position. I'm not worried about after Dec. 18th when I finish school, but until then, it will take some extra planning on my part to stay on top of my schooling and the internship. That being said, I am up to the challenge and know that this will be a great opportunity to practice my time-management for later seasons of life such as university studies or full-time work."; break; 
        case 5: content = "In the case that this internship doesn't work out, I would be encouraged to meet with whoever assesses the applications and welcome constructive criticism on how I could improve for the next time I look for a similar opportunity. Next, I'd take the hours otherwise spent on the internship to improve my technical skills and grow my network to be fully prepared and open as many doors as possible for future work prospects."; break; 
        case 6: content = "Ever since I was little I've been intrigued by innovative solutions to everyday problems, and as soon as I was introduced to programming, I felt like the doors to possibility had been blown open. Every time I sit down at my laptop, I get butterflies in my stomach by just knowing that I can build anything. I view programming as a creative art, painting my Monet one line at a time. Having the fluency to transform my ideas into solutions to complex problems, brings meaning and joy to my life."; break; 
    } // switch
    document.getElementById("text").innerHTML = content;
    element.style.background = "#383a3e";  
} // question