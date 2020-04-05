import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ViewPropTypes } from 'react-native';

class CoachmarkContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={this.props.messageStyle}>
          <Text style={this.props.messageTextStyle}>{this.props.message}</Text>
        </View>
        <View style={this.props.buttonStyle}>
          <Text style={this.props.buttonTextStyle}>OK</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  message: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.15,
  },
  button: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(246,246,246)',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgb(7, 112, 205)',
    fontWeight: 'bold',
  },
});

CoachmarkContent.propTypes = {
  message: PropTypes.string.isRequired,
  messageStyle: ViewPropTypes.style,
  messageTextStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  buttonTextStyle: ViewPropTypes.style,
};

CoachmarkContent.defaultProps = {
  style: styles.container,
  messageStyle: styles.message,
  messageTextStyle: styles.messageText,
  buttonStyle: styles.button,
  buttonTextStyle: styles.buttonText,
};

export default CoachmarkContent;
