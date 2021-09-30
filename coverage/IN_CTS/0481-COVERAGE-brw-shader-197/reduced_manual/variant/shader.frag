#version 320 es

#define LOOP for (int i = 0; i < 1; i++)

precision highp float;
precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(push_constant) uniform buf_push
{
    float five;
};

// Function always returns 1.0.
float func(float x)
{
    float a = 1.0;

    LOOP
    {
        LOOP
        {
            LOOP
            {
                LOOP
                {
                    LOOP
                    {
                        // Always false.
                        if (mod(1.0, x) < 0.0)
                        {
                            LOOP
                            {
                                LOOP
                                {
                                    LOOP
                                    {
                                        LOOP
                                        {
                                            LOOP
                                            {
                                                LOOP
                                                {
                                                    a += 1.0;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        // Always true.
                        if (x > 1.0)
                        {
                            return a;
                        }
                    }
                }
            }
        }
    }

    return 2.0;
}

void main()
{
    float f = 0.0;

    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP {
    LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP { LOOP
    {
        f = func(five);
    }
    } } } } } } } } } } } } } } } } } } } } } } } } } } }

    // Always true.
    if (f == 1.0)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
