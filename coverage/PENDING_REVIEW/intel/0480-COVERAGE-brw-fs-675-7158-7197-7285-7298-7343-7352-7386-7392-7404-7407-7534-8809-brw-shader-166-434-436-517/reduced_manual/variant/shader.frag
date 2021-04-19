#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define LOOP for (int i = 0; i < 1; i++)

precision highp float;
precision highp int;

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float arr[10] = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
    int index = 0;

    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        // The inner loop will be iterated just once.
        LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
        LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
        LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
        LOOP { LOOP { LOOP { LOOP { LOOP
        {
            _GLF_global_loop_count ++;
        }
        } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } }

        // In the end all elemenst of arr have a value of 2.0.
        arr[_GLF_MAKE_IN_BOUNDS_INT(index, 10)] = float[10](2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0)[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
        index++;
    }

    // The selected indices don't matter as all have the same data of 2.0.
    vec2 v = vec2(arr[_GLF_MAKE_IN_BOUNDS_INT(int(gl_FragCoord.x), 10)], arr[_GLF_MAKE_IN_BOUNDS_INT(int(gl_FragCoord.y), 10)]);

    // Always true.
    if (v.x == 2.0 && v.y == 2.0)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);

}
