import React from 'react';
import PostCard from './PostCard';

const posts = [
    {
        title: 'Bait and Switch',
        post: "Using Bait and Switch hacking technique, an attacker can buy advertising spaces on the websites. Later, when a user clicks on the ad, he might get directed to a page that’s infected with malware. This way, they can further install malware or adware on your computer. The ads and download links shown in this technique are very attractive and users are expected to end up clicking on the same. The hacker can run a malicious program that the user believes to be authentic. This way, after installing the malicious program on your computer, the hacker gets unprivileged access to your computer."
    },
    {
        title: 'Cookie theft',
        post: "The cookies in our browser store personal data such as browsing history, username, and passwords for different sites we access. Once the hacker gets access to your cookie, he can even authenticate himself as you on a browser. A popular method to carry out this attack is to manipulate a user’s IP packets to pass through attacker’s machine. Also known as SideJacking or Session Hijacking, this attack is easy to carry out if the user is not using SSL (HTTPS) for the complete session. On the websites where you enter your password and banking details, it’s of utmost importance for them to make their connections encrypted."
    },
    {
        title: 'ClickJacking Attacks',
        post: "ClickJacking is also known by a different name, UI Redress. In this attack, the hacker hides the actual UI where the victim is supposed to click. This behavior is very common in-app download, movie streaming, and torrent websites. While they mostly employ this technique to earn advertising dollars, others can use it to steal your personal information. In other words, in this type of hacking, the attacker hijacks the clicks of the victim that aren’t meant for the exact page, but for a page where the hacker wants you to be. It works by fooling an internet user into performing an undesired action by clicking on the hidden link."
    },
    {
        title: 'Virus, Trojan, etc.',
        post: "Viruses or Trojans are malicious software programs that get installed into the victim’s system and keep sending the victim’s data to the hacker. They can also lock your files, serve fraud advertisement, divert traffic, sniff your data, or spread on all the computers connected to your network. You can read the comparison and difference between various malware, worms, trojans, etc., to know more."
    },
    {
        title: 'Phishing',
        post: "Phishing is a hacking technique using which a hacker replicates the most-accessed sites and traps the victim by sending that spoofed link. Combined with social engineering, it becomes one of the most commonly used and deadliest attack vectors. Once the victim tries to login or enters some data, the hacker gets the private information of the target victim using the trojan running on the fake site. Phishing via iCloud and Gmail account was the attack route taken by hackers who targeted the “Fappening” leak, which involved numerous Hollywood female celebrities."
    },
    {
        title: 'Eavesdropping (Passive Attacks)',
        post: "Unlike other attacks that are active in nature, using a passive attack, a hacker can monitor the computer systems and networks to gain some unwanted information. The motive behind eavesdropping is not to harm the system but to get some information without being identified. These types of hackers can target email, instant messaging services, phone calls, web browsing, and other methods of communication. Those who indulge in such activities are generally black hat hackers, government agencies, etc."
    },
];

const Posts = () => {
    return (
        <div>
            <h2>Admin Posts</h2>
            {
                posts.map(post => <PostCard
                    key={post.title}
                    post = {post}
                />)
            }
        </div>
    );
};

export default Posts;