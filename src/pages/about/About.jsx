import React from 'react';

import styles from './about.module.css';

import SimpleHeader from '../../components/simpleHeader/SimpleHeader';

import Logo from '../../components/logo/Logo';

import Loremipsum from '../../components/text/loremipsum';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <SimpleHeader labelButton='Voltar' urlButton='/' themeButton="red">INFORMAÇÕES</SimpleHeader>
      <div className={styles['about-container-cases']}>
        <Logo size='large' /> {/* nesse em especifico seria interessante usar de " urlLogo='/' " alterando no logo.js com operador ternario para caso " urlLogo != null "  usar o " navigate(urlLogo) "*/}
        <div className={styles['text-case']}>
          <Loremipsum tag='p' color='white' fontSize='small'>Lorem ipsum dolor sit amet. Qui enim esse est eveniet deserunt qui illum molestias eos molestiae laboriosam est laboriosam unde cum voluptatem velit. Est doloremque voluptatem ea tenetur dolores vel facilis nisi ut officiis consequuntur et explicabo omnis ex dolor amet. Ut galisum velit sed accusamus voluptate et magnam labore At Quis velit est nisi ducimus.Vel veritatis quasi a inventore ipsa ut esse provident ut mollitia illo. Et omnis numquam qui pariatur ipsam eum blanditiis fuga. Et harum adipisci eos eligendi sapiente est molestiae consequatur. Aut vero enim nam molestiae voluptates qui nobis molestiae.Et porro dolores et consectetur voluptates est rerum quaerat id exercitationem dolore. Ut ipsum deserunt aut nemo perferendis ea nulla minima aut internos impedit est error tenetur. Vel illum commodi quo expedita similique est doloribus accusamus. Id autem delectus est soluta consequatur ut praesentium sint quo cupiditate fugiat qui velit atque et voluptatem voluptas aut similique dolorum.</Loremipsum>
        </div>
      </div>
    </div>
  )
}

export default About