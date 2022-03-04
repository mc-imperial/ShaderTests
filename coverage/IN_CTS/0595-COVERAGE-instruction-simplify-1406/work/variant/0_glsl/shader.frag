#version 320 es

precision highp float;
precision highp int;

layout(set = 0, binding = 0) uniform buf0
{
    int one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Arithmetic shift replicates the sign bit.
    int a = 0xffffffff >> one;
    // Clamps to 2.0.
    float f = clamp(5.0, 1.0, (a == 0xffffffff) ? 2.0 : 3.0);

    // Always true.
    if (int(f) == 2)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
