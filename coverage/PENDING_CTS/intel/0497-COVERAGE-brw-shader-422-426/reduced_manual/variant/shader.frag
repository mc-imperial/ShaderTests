#version 320 es

precision highp float;
precision highp int;

layout(location = 0) out vec4 _GLF_color;

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

#define LOOP for (int i = 0; i < 5 && _GLF_global_loop_count < _GLF_global_loop_bound; i++, _GLF_global_loop_count++, a++)

void main()
{
    vec2 v = gl_FragCoord.xy;
    _GLF_color = vec4(v, 0, 1);
    int a = 0;

    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
        // Always false.
        if(gl_FragCoord.x < 0.0)
        {
            return;
        }
    } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } }

    // Always true because the partial derivative of gl_FragCoord is the same
    // in x and y directions. The two most inner loops run until _GLF_global_loop_count
    // (and a with it) becomes ten. The other loops increase the variable a by one.
    if (dFdx(v.x) - dFdy(v.y) == 0.0 && a == 10 + 38)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
