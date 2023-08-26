import React from "react";
import { PatternFormat } from "react-number-format";


export class PatternNumber extends React.Component {

    //   componentDidUpdate(prevProps) {
    //     console.log('old props:', prevProps);
    //     console.log('new props:', this.props);
    //   }

      render() {
        const {forwardedRef, ...rest} = this.props;

        // Assign the custom prop "forwardedRef" as a ref
        return <PatternFormat ref={forwardedRef} {...rest} />;
      }
    }

