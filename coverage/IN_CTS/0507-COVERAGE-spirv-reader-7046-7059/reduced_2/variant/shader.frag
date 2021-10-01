#version 320 es

precision highp int;

precision highp float;

// Contents of matrix_a_uni: [1.0, 5.0, 3.0, 7.0, 9.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]
layout(push_constant) uniform buf_push {
 mat4 matrix_a_uni;
};
void main()
{
}
