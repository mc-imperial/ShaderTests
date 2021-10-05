#version 320 es

precision highp float;
precision highp int;

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    highp vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    _GLF_color = vec4(0);

    int a = 0;

    // None of the returns, discards, or continues are executed in this loop.
    do
    {
        _GLF_global_loop_count ++;

        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
        if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;

        a++;

        // Always false.
        if(a == 0)
        {
            if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;
            if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return; if(gl_FragCoord.x < 0.0) return;

            while (_GLF_global_loop_count < _GLF_global_loop_bound)
            {
                _GLF_global_loop_count ++;

                if(gl_FragCoord.x < 0.0) return;

                if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
                if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            }

            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
        }
        else
        {
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard; if(gl_FragCoord.x < 0.0) discard;
            if(gl_FragCoord.x < 0.0) discard;

            if(injectionSwitch.x > injectionSwitch.y)
            {
                if(gl_FragCoord.x < 0.0) return;
                if(gl_FragCoord.x < 0.0) continue;

                discard;
            }

        }

        if(gl_FragCoord.x < 0.0) discard;
        if(gl_FragCoord.x < 0.0) continue;

        _GLF_color = vec4(1, 0, 0, 1);

        return;
    }
    while(_GLF_global_loop_count < _GLF_global_loop_bound);
}
