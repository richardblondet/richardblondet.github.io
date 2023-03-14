import { useState } from "react";
import { ProfileCard, PersonaMapType } from "@richardblondet.com/ui";

const PersonasExampleList = [{
    slug: 'software-developer',
    name: 'Software Developer',
    avatarImage: '/profile-picture.jpeg',
    description: 'I\'d love to change the world, but they won\'t give me the source code.',
    actions: ['#hashtag', '#hashtag', '#hashtag', '#hashtag', '#hashtag'],
    now: [ '🧳 open for work', '🛠 building personas', '👓 learning astro'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
  }, 
  {
    slug: 'blogger',
    name: 'Blogger',
    avatarImage: '/profile-picture.jpeg',
    description: 'I\'m summarizing and recording the progress of my life journey in the context of this project related to this project ',
    actions: ['#hashtag', '#hashtag', '#hashtag', '#hashtag', '#hashtag'],
    now: ['🛠 building personas'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
  }, {
    slug: 'mtb-hobbist',
    name: 'MTB Hobbist',
    avatarImage: '/profile-picture.jpeg',
    description: 'I like to bike occasionally over mirador sur',
    actions: ['#hashtag', '#hashtag'],
    now: ['🛠 building personas'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
}];

export default () => {
  const defaultSelectedPersona = 'software-developer';
  const personasList = PersonasExampleList;

  const [selectedPersona, setSelectedPersona] = useState(defaultSelectedPersona);

  const onPersonaItemClick = (p) => {
    console.log('ONCLICKK SHIET ', p)
    setSelectedPersona(p);
  };

  const componentProps = {
    personasList,
    selectedPersona,
    onPersonaItemClick
  };

  return (
    <> 
      <ProfileCard {...componentProps} />
    </>
  );
}