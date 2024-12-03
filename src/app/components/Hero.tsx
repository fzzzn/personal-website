const Hero = () => {
  return (
    <div className="-pt-10">
      <h1 className='text-4xl font-bold mb-1'>
        Rizky Fauzan Hanif
      </h1>
      <h2 className='text-xl mb-8'>Network Engineer</h2>
      <p className='text-lg mb-2'>Hi, I&apos;m Rizky Fauzan Hanif</p>
      <p className='mb-2'>
        A passionate student at SMKN 2 Depok Sleman, dedicated to mastering
        networking, DevOps, and cybersecurity. I&apos;m fascinated by the power
        of networking technologies, from tunneling to building secure
        infrastructures.
      </p>
      <p className='mb-2'>
        To deepen my knowledge, I’ve earned my MikroTik Certified Network
        Associate (MTCNA) certification, honing my skills in network setup,
        configuration, and troubleshooting.
      </p>
      <p className='mb-2'>
        With a strong focus on network engineering and network security,
        I&apos;m continuously exploring new technologies to design secure,
        scalable networks. Alongside this, I&apos;ve gained certifications in
        cybersecurity and cloud computing, further solidifying my technical
        foundation.
      </p>
      <p className='mb-6'>
        I&apos;m eager to take on complex networking challenges and contribute
        to innovative, cutting-edge solutions in the field!
      </p>
      <h2 className='text-xl mb-2 font-bold'>
        If you&apos;d like to say hi, feel free to reach out!
      </h2>
      <hr className='mb-2' />
      <ul className='space-y-2'>
        <li>
          <a
            href='mailto:contact@rizkyfauzan.id'
            className='underline'
            title='Send an email'
          >
            contact at rizkyfauzan.id
          </a>
          <span> </span>
          <a
            href='https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xf5b36de949d3f143a38ffcebc5e319385733a5f5'
            className='underline'
            title='PGP public key'
          >
            (PGP public key)
          </a>
        </li>
        <li>
          <a
            href='https://x.com/fzzznh'
            className='underline'
            title='X profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter or X
          </a>
        </li>
        <li>
          <a
            href='https://keybase.io/fzzzn'
            className='underline'
            title='Keybase profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            {"Keybase, if you'd like to send me classified secrets"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
