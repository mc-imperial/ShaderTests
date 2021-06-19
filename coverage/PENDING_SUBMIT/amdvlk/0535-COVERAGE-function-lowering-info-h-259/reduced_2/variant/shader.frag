#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(set = 0, binding = 0) uniform sampler2D tex;

void main()
{
 vec2 coord = vec2(1.0);
 vec4 texel = vec4(1.0);
 texel = texture(tex, vec2(1.0));
 for(int _injected_loop_counter = 0; _injected_loop_counter < int(injectionSwitch.y); 1)
  {
   while(texel.x > 1.0)
    {
     for(int _injected_loop_counter = int(injectionSwitch.x); _injected_loop_counter < int(injectionSwitch.y); _injected_loop_counter ++)
      {
       if(gl_FragCoord.y < 0.0)
        {
        }
       else
        {
         for(int _injected_loop_counter = 1; _injected_loop_counter > 0; _injected_loop_counter --)
          {
           for(int _injected_loop_counter = 4; _injected_loop_counter != 1; _injected_loop_counter ++)
            {
             for(int _injected_loop_counter = 0; _injected_loop_counter < int(injectionSwitch.y); _injected_loop_counter ++)
              {
               if(gl_FragCoord.y < 0.0)
                {
                }
               else
                {
                 coord = vec2(1.0);
                }
              }
            }
          }
        }
      }
     coord = coord * 256.0;
     for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
      {
       for(int _injected_loop_counter = 1; _injected_loop_counter != 0; _injected_loop_counter --)
        {
         texel = texture(tex, coord);
        }
      }
     for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
      {
       for(int _injected_loop_counter = 0; _injected_loop_counter != 1; _injected_loop_counter ++)
        {
        }
      }
    }
  }
}
