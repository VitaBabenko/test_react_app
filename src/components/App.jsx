import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

   

  countLeaveFeedback = option => {
    this.setState(state => {
      return {
        [option]: state[option] + 1
      }
    })
  };

  countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good * 100) / this.countTotalFeedback()).toFixed(0);
  }

  render() {
     const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <GlobalStyle />
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.countLeaveFeedback} />
        {this.countTotalFeedback() ? (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback!" />)}  
        </Section>
  );
 }
};
