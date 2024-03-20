import Page from '@/components/Page';
import Wrapper from '@/components/Wrapper';
import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <>
      <Head>
        <title>Sameer | projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <div className="mt-20 h-full w-full">
          <h1>More works</h1>
        </div>
        <div>
          <table class="h-full w-full table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Page>
      ;
    </>
  );
};

export default About;
