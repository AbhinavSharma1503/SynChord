import numpy as np


def create_stereo(
    left_channel,
    right_channel,
):
    """
    Combine two mono signals into one stereo signal.
    """

    length = min(
        len(left_channel),
        len(right_channel),
    )

    left = left_channel[:length]
    right = right_channel[:length]

    stereo = np.column_stack(
        (
            left,
            right,
        )
    )

    return stereo