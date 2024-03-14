function elt(tag, classname, text, ...children){
    let elem = document.createElement(tag);
    elem.className = classname;
    if (text){
        elem.textContent = text;
    }
    for (let child of children){
        elem.appendChild(child);
    }
    return elem;
}

function createImg(url){
    let img = document.createElement('img');
    img.setAttribute('src', url);
    return img;
}

class Episode {
    constructor() {
        this.episodeFill = [
            {url: './img/Episod_3.jpg', icon: 'Gear', number: 'Episode 3', header: 'Should you get outboard audio gear?', text: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.', button: 'View Episode Details'},
            {url: './img/Episod_2.jpg', icon: 'Tips & Tricks', number: 'Episode 2', header: 'Mic tricks to take you to the next level', text: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.', button: 'View Episode Details'},
            {url: './img/Episod_1.jpg', icon: 'Gear', number: 'Episode 1', header: 'The best microphone under $200', text: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.', button: 'View Episode Details'}
        ];
    }

    createEpisods(){
        let container = document.getElementById('episode_list');
        for (let i = 0; i < 3; i++){
            container.appendChild(
            elt('li', 'episode_blok', null, 
                elt('div', 'img_wrap', null, createImg(this.episodeFill[i].url)),
                elt('div', 'episode_text-blok', null, 
                    elt('p', 'episode_icon', this.episodeFill[i].icon),
                    elt('p', 'episode_numdber', this.episodeFill[i].number),
                    elt('h3', 'episode_header', this.episodeFill[i].header),
                    elt('p', 'episode_text', this.episodeFill[i].text),
                    elt('button', 'episode_button', this.episodeFill[i].button)
                    )
                )
            );
        }
    }
    
    addNewFeedback(url, icon, number, header, text, button){
        this.episodeFill.shift({url, icon, number, header, text, button});
    }
}

class Feedback {
    constructor() {
        this.feedbackFill = [
            {mark: 3, feedback: 'I can’t recommend this podcast enough', author: 'Betty Lacey'},
            {mark: 5, feedback: 'Jacob is the best in the business', author: 'Adam Driver'},
            {mark: 4, feedback: 'A wealth of audio knowledge', author: 'Marcus Brown'},
            {mark: 5, feedback: 'Every episode is a gem!', author: 'Jessica Knowl'},
            {mark: 2, feedback: 'Whoa whoa, let me take some notes!', author: 'Scott Adams'},
            {mark: 1, feedback: 'I’ve upped my game considerably since I started listening', author: 'Steven Blast'}
        ];
    }

    createFeedback() {
        let feedbackBlock = document.querySelector('.feedbacks-list');
        for (let i = 0; i < 6; i++){
            let marks = elt('ul', 'mark', null);
            for (let j = 0; j < this.feedbackFill[i].mark; j++){
                marks.appendChild(elt('li', 'star', null, createImg('./img/star.svg')));
            }
            feedbackBlock.appendChild(
                elt('li', 'feedback-block', null,
                    marks,
                    elt('p', 'feedback', this.feedbackFill[i].feedback),
                    elt('p', 'author', this.feedbackFill[i].author)
            ));
        }
    }

    addNewFeedback(mark, feedback, author){
        this.feedbackFill.shift({mark, feedback, author});
    }
}

const episode = new Episode;
const feedback = new Feedback;
episode.createEpisods();
feedback.createFeedback();