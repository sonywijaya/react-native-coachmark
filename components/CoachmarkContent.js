import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ViewPropTypes } from 'react-native';

class CoachmarkContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.message, this.props.messageStyle]}>
          <Text style={[styles.messageText, this.props.messageTextStyle]}>{this.props.message}</Text>
        </View>
        <View style={[styles.button, this.props.buttonStyle]}>
          <Text style={[styles.buttonText, this.props.buttonTextStyle]}>OK</Text>
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
  messageTextStyle: Text.propTypes.style,
  buttonStyle: ViewPropTypes.style,
  buttonTextStyle: Text.propTypes.style,
};

CoachmarkContent.defaultProps = {
  messageStyle: {},
  messageTextStyle: {},
  buttonStyle: {},
  buttonTextStyle: {},
};

export default CoachmarkContent;
