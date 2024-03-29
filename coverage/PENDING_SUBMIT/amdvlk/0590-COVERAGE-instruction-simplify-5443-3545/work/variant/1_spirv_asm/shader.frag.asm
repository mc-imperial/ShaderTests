; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 141
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %100
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %50 "ref"
               OpName %73 "i"
               OpName %100 "_GLF_color"
               OpName %114 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %100 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 11
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 2
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 1
         %25 = OpConstant %6 3
         %28 = OpConstant %6 4
         %31 = OpConstant %6 5
         %34 = OpConstant %6 6
         %37 = OpConstant %6 7
         %40 = OpConstant %6 8
         %43 = OpConstant %6 9
         %46 = OpConstant %6 10
         %72 = OpTypePointer Function %6
         %82 = OpTypeBool
         %97 = OpTypeFloat 32
         %98 = OpTypeVector %97 4
         %99 = OpTypePointer Output %98
        %100 = OpVariable %99 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %50 = OpVariable %10 Function
         %73 = OpVariable %72 Function
        %114 = OpVariable %72 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %17 %25
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %19 %16 %17 %28
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %19 %16 %17 %31
         %33 = OpLoad %6 %32
         %35 = OpAccessChain %19 %16 %17 %34
         %36 = OpLoad %6 %35
         %38 = OpAccessChain %19 %16 %17 %37
         %39 = OpLoad %6 %38
         %41 = OpAccessChain %19 %16 %17 %40
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %19 %16 %17 %43
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %19 %16 %17 %46
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %9 %21 %24 %27 %30 %33 %36 %39 %42 %45 %48
               OpStore %11 %49
         %51 = OpAccessChain %19 %16 %17 %18
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %19 %16 %17 %22
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %19 %16 %17 %22
         %56 = OpLoad %6 %55
         %57 = OpAccessChain %19 %16 %17 %22
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %19 %16 %17 %22
         %60 = OpLoad %6 %59
         %61 = OpAccessChain %19 %16 %17 %22
         %62 = OpLoad %6 %61
         %63 = OpAccessChain %19 %16 %17 %22
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %19 %16 %17 %22
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %19 %16 %17 %22
         %68 = OpLoad %6 %67
         %69 = OpAccessChain %19 %16 %17 %22
         %70 = OpLoad %6 %69
         %71 = OpCompositeConstruct %9 %52 %54 %56 %58 %60 %62 %64 %66 %68 %70
               OpStore %50 %71
               OpStore %73 %17
               OpBranch %74
         %74 = OpLabel
               OpLoopMerge %76 %77 None
               OpBranch %78
         %78 = OpLabel
         %79 = OpLoad %6 %73
         %80 = OpAccessChain %19 %16 %17 %17
         %81 = OpLoad %6 %80
         %83 = OpSLessThan %82 %79 %81
               OpBranchConditional %83 %75 %76
         %75 = OpLabel
         %84 = OpLoad %6 %73
         %85 = OpLoad %6 %73
         %86 = OpExtInst %6 %1 SSign %85
         %87 = OpAccessChain %19 %16 %17 %18
         %88 = OpLoad %6 %87
         %89 = OpAccessChain %19 %16 %17 %22
         %90 = OpLoad %6 %89
         %91 = OpExtInst %6 %1 SClamp %86 %88 %90
         %92 = OpAccessChain %72 %11 %91
         %93 = OpLoad %6 %92
         %94 = OpAccessChain %72 %11 %84
               OpStore %94 %93
               OpBranch %77
         %77 = OpLabel
         %95 = OpLoad %6 %73
         %96 = OpIAdd %6 %95 %22
               OpStore %73 %96
               OpBranch %74
         %76 = OpLabel
        %101 = OpAccessChain %19 %16 %17 %22
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %97 %102
        %104 = OpAccessChain %19 %16 %17 %18
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %97 %105
        %107 = OpAccessChain %19 %16 %17 %18
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %97 %108
        %110 = OpAccessChain %19 %16 %17 %22
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %97 %111
        %113 = OpCompositeConstruct %98 %103 %106 %109 %112
               OpStore %100 %113
        %115 = OpAccessChain %19 %16 %17 %18
        %116 = OpLoad %6 %115
               OpStore %114 %116
               OpBranch %117
        %117 = OpLabel
               OpLoopMerge %119 %120 None
               OpBranch %121
        %121 = OpLabel
        %122 = OpLoad %6 %114
        %123 = OpAccessChain %19 %16 %17 %17
        %124 = OpLoad %6 %123
        %125 = OpSLessThan %82 %122 %124
               OpBranchConditional %125 %118 %119
        %118 = OpLabel
        %126 = OpLoad %6 %114
        %127 = OpAccessChain %72 %11 %126
        %128 = OpLoad %6 %127
        %129 = OpLoad %6 %114
        %130 = OpAccessChain %72 %50 %129
        %131 = OpLoad %6 %130
        %132 = OpINotEqual %82 %128 %131
               OpSelectionMerge %134 None
               OpBranchConditional %132 %133 %134
        %133 = OpLabel
        %135 = OpAccessChain %19 %16 %17 %18
        %136 = OpLoad %6 %135
        %137 = OpConvertSToF %97 %136
        %138 = OpCompositeConstruct %98 %137 %137 %137 %137
               OpStore %100 %138
               OpBranch %134
        %134 = OpLabel
               OpBranch %120
        %120 = OpLabel
        %139 = OpLoad %6 %114
        %140 = OpIAdd %6 %139 %22
               OpStore %114 %140
               OpBranch %117
        %119 = OpLabel
               OpReturn
               OpFunctionEnd
