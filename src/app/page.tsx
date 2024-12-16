'use client';

import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <section>
        <p>
          Welcome & hello! I&#39;m Joe Nevin, a software engineer based out of Chicago.
          My main focus is building robust web applications in the cloud.
          Outside of technology, my passions are history, reading, movies, sports, & video games.
        </p>
        <p>
          <span>
            <b>Current Technologies:</b>
            {' '}
            React, AWS, Go, Ruby on Rails.
          </span>
          <br />
          <span>
            <b>Past Technologies:</b>
            {' '}
            .NET, Vue, Angular, Azure.
          </span>
        </p>
        <p>
          <span>
            <b>Work History:</b>
            {' '}
            Enova, DFIN, Shure, & Motorola Solutions.
          </span>
          <br />
          <span>
            <b>Education:</b>
            {' '}
            BSE, Electrical Engineering, University of Iowa.
          </span>
        </p>
        <Image alt="face" src="/images/face.jpg" width={320} height={320} priority />
      </section>
    </main>
  );
};

export default Home;
