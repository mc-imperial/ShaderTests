#version 320 es

precision highp float;
precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat2 m = transpose(mat2(1, 2, 3, 4)) / 2.0;

    if (m == mat2(0.5, 1.5, 1.0, 2.0))
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
