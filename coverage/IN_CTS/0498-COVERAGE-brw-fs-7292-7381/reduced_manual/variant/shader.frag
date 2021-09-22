#version 320 es

precision highp float;
precision highp int;

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

struct S
{
    int data[10];
};

int func(S obj)
{
    int x = 0;

    // Five more iterations as the global loop count has already
    // reached its limit.
    while(_GLF_global_loop_count < _GLF_global_loop_bound + 5)
    {
        _GLF_global_loop_count ++;

        // Checks if the first five elements are set to the
        // correct value inside the inner loop in the main
        // function. Return zero if the check fails.
        if (obj.data[x] != x)
            return 0;

        x++;
    }

    // Return 1 when the check passes.
    return 1;
}

// Global loop counter incrementation cannot be inside the for loop (along with i++) for the coverage points to trigger.
#define LOOP _GLF_global_loop_count++; for(int i = 0; i < 5 && _GLF_global_loop_count < _GLF_global_loop_bound; i++)

void main()
{
    S obj = S(int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0));

    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
        // Sets the first five elements to 0, 1, 2, 3, 4.
        obj.data[i] = i;
    } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } } }

    int a = 0;
    // Always true.
    if(gl_FragCoord.y > 0.0)
        a = func(obj);

    // Always true.
    if (a == 1)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
