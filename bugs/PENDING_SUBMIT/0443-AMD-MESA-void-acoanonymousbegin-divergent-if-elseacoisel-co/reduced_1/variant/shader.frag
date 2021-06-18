#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
int map[16 * 16];

void main()
{
 vec2 pos = gl_FragCoord.xy / resolution;
 ivec2 ipos = ivec2(int(pos.x * 16.0), int(pos.y * 16.0));
 int i;
 for( i = 0;
 i < 16 * 16; i ++)
  {
   map[i] = 0;
  }
 ivec2 p = ivec2(0, 0);
 bool canwalk = true;
 do
  {
  }
 // Always false.
 while((gl_FragCoord.y < 0.0));
 int v = 0;
 do
  {
   // Always true.
   if(bool(bvec2((injectionSwitch.x < injectionSwitch.y), true)))
    {
     v ++;
    }
   else
    // This is never reached.
    {
     // Always false.
     if((injectionSwitch.x > injectionSwitch.y))
      {
       discard;
      }
     // Always false.
     if((injectionSwitch.x > injectionSwitch.y))
      {
       // Always false.
       if(gl_FragCoord.y < 0.0)
        {
         return;
        }
      }
    }
   int directions = 0;
   if(p.x > 0 && map[(p.x - 2) + (p.y) * 16] == 0)
    {
     directions += 1;
    }
   if(p.y > 0 && map[(p.x) + (p.y - 2) * 16] == 0)
    {
     directions += 1;
    }
   if(p.x < 14 && map[(p.x + 2) + (p.y) * 16] == 0)
    {
     directions += 1;
    }
   if(p.y < 14 && map[(p.x) + (p.y + 2) * 16] == 0)
    {
     directions += 1;
    }
   if(directions == 0)
    {
     canwalk = false;
     int j;
     for(     i = 0;
 i < 8; i ++)
      {
       for(       j = 0;
 j < 8; j ++)
        {
         if(map[j * 2 + i * 2 * 16] == 0)
          {
           p.x = j * 2;
           p.y = i * 2;
           canwalk = true;
          }
        }
      }
     map[(p.x) + (p.y) * 16] = 1;
    }
   else
    {
     int d = v % directions;
     v += directions;
     if(d >= 0 && p.x > 0 && map[(p.x - 2) + (p.y) * 16] == 0)
      {
       d --;
       map[(p.x) + (p.y) * 16] = 1;
       map[(p.x - 1) + (p.y) * 16] = 1;
       map[(p.x - 2) + (p.y) * 16] = 1;
       p.x -= 2;
      }
     if(d >= 0 && p.y > 0 && map[(p.x) + (p.y - 2) * 16] == 0)
      {
       d --;
       map[(p.x) + (p.y) * 16] = 1;
       map[(p.x) + (p.y - 1) * 16] = 1;
       map[(p.x) + (p.y - 2) * 16] = 1;
       p.y -= 2;
      }
     if(d >= 0 && p.x < 14 && map[(p.x + 2) + (p.y) * 16] == 0)
      {
       d --;
       map[(p.x) + (p.y) * 16] = 1;
       map[(p.x + 1) + (p.y) * 16] = 1;
       map[(p.x + 2) + (p.y) * 16] = 1;
       p.x += 2;
      }
     if(d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == 0)
      {
       d --;
       map[(p.x) + (p.y) * 16] = 1;
       map[(p.x) + (p.y + 1) * 16] = 1;
       map[(p.x) + (p.y + 2) * 16] = 1;
       p.y += 2;
      }
    }
   if(map[ipos.y * 16 + ipos.x] == 1)
    {
     _GLF_color = vec4(1.0, 1.0, 1.0, 1.0);
     return;
    }
  }
 while(canwalk);
 _GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
}
