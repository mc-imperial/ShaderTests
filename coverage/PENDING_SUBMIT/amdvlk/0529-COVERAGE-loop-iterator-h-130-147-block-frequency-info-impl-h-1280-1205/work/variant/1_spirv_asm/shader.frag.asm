; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 154
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %98 %135
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %41 "i"
               OpName %43 "buf1"
               OpMemberName %43 0 "_GLF_uniform_int_values"
               OpName %45 ""
               OpName %60 "j"
               OpName %70 "buf_push"
               OpMemberName %70 0 "injectionSwitch"
               OpName %72 ""
               OpName %98 "gl_FragCoord"
               OpName %135 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 1
               OpMemberDecorate %70 0 Offset 0
               OpDecorate %70 Block
               OpDecorate %98 BuiltIn FragCoord
               OpDecorate %135 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 9
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 3
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %40 = OpTypePointer Function %17
         %42 = OpTypeArray %17 %12
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpConstant %17 2
         %47 = OpTypePointer Uniform %17
         %58 = OpTypeBool
         %67 = OpConstant %17 4
         %69 = OpTypeVector %6 2
         %70 = OpTypeStruct %69
         %71 = OpTypePointer PushConstant %70
         %72 = OpVariable %71 PushConstant
         %73 = OpConstant %7 0
         %74 = OpTypePointer PushConstant %6
         %77 = OpConstant %7 1
         %96 = OpTypeVector %6 4
         %97 = OpTypePointer Input %96
         %98 = OpVariable %97 Input
         %99 = OpTypePointer Input %6
        %102 = OpConstant %6 0
        %111 = OpTypePointer Function %6
        %134 = OpTypePointer Output %96
        %135 = OpVariable %134 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %41 = OpVariable %40 Function
         %60 = OpVariable %40 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %16 %18 %19
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %16 %18 %19
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %20 %16 %18 %19
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %20 %16 %18 %19
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %20 %16 %18 %19
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %20 %16 %18 %19
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %20 %16 %18 %19
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %20 %16 %18 %19
         %38 = OpLoad %6 %37
         %39 = OpCompositeConstruct %9 %22 %24 %26 %28 %30 %32 %34 %36 %38
               OpStore %11 %39
         %48 = OpAccessChain %47 %45 %18 %46
         %49 = OpLoad %17 %48
               OpStore %41 %49
               OpBranch %50
         %50 = OpLabel
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %55 = OpLoad %17 %41
         %56 = OpAccessChain %47 %45 %18 %18
         %57 = OpLoad %17 %56
         %59 = OpSLessThan %58 %55 %57
               OpBranchConditional %59 %51 %52
         %51 = OpLabel
               OpStore %60 %18
               OpBranch %61
         %61 = OpLabel
               OpLoopMerge %63 %64 None
               OpBranch %65
         %65 = OpLabel
         %66 = OpLoad %17 %60
         %68 = OpSLessThan %58 %66 %67
               OpBranchConditional %68 %62 %63
         %62 = OpLabel
         %75 = OpAccessChain %74 %72 %18 %73
         %76 = OpLoad %6 %75
         %78 = OpAccessChain %74 %72 %18 %77
         %79 = OpLoad %6 %78
         %80 = OpFOrdGreaterThan %58 %76 %79
         %81 = OpLogicalNot %58 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %83
         %82 = OpLabel
               OpBranch %84
         %84 = OpLabel
               OpLoopMerge %86 %87 None
               OpBranch %85
         %85 = OpLabel
         %88 = OpAccessChain %74 %72 %18 %73
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %74 %72 %18 %77
         %91 = OpLoad %6 %90
         %92 = OpFOrdGreaterThan %58 %89 %91
         %93 = OpLogicalNot %58 %92
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %95
         %94 = OpLabel
        %100 = OpAccessChain %99 %98 %73
        %101 = OpLoad %6 %100
        %103 = OpFOrdLessThan %58 %101 %102
        %104 = OpLogicalNot %58 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
        %107 = OpAccessChain %47 %45 %18 %19
        %108 = OpLoad %17 %107
        %109 = OpAccessChain %20 %16 %18 %19
        %110 = OpLoad %6 %109
        %112 = OpAccessChain %111 %11 %108
        %113 = OpLoad %6 %112
        %114 = OpFAdd %6 %113 %110
        %115 = OpAccessChain %111 %11 %108
               OpStore %115 %114
               OpBranch %106
        %106 = OpLabel
               OpBranch %95
         %95 = OpLabel
               OpBranch %87
         %87 = OpLabel
        %116 = OpAccessChain %99 %98 %77
        %117 = OpLoad %6 %116
        %118 = OpAccessChain %20 %16 %18 %46
        %119 = OpLoad %6 %118
        %120 = OpFOrdLessThan %58 %117 %119
               OpBranchConditional %120 %84 %86
         %86 = OpLabel
               OpBranch %83
         %83 = OpLabel
               OpBranch %64
         %64 = OpLabel
        %121 = OpLoad %17 %60
        %122 = OpIAdd %17 %121 %19
               OpStore %60 %122
               OpBranch %61
         %63 = OpLabel
               OpBranch %53
         %53 = OpLabel
        %123 = OpLoad %17 %41
        %124 = OpIAdd %17 %123 %19
               OpStore %41 %124
               OpBranch %50
         %52 = OpLabel
        %125 = OpAccessChain %47 %45 %18 %19
        %126 = OpLoad %17 %125
        %127 = OpAccessChain %111 %11 %126
        %128 = OpLoad %6 %127
        %129 = OpAccessChain %20 %16 %18 %18
        %130 = OpLoad %6 %129
        %131 = OpFOrdEqual %58 %128 %130
               OpSelectionMerge %133 None
               OpBranchConditional %131 %132 %149
        %132 = OpLabel
        %136 = OpAccessChain %47 %45 %18 %19
        %137 = OpLoad %17 %136
        %138 = OpConvertSToF %6 %137
        %139 = OpAccessChain %47 %45 %18 %46
        %140 = OpLoad %17 %139
        %141 = OpConvertSToF %6 %140
        %142 = OpAccessChain %47 %45 %18 %46
        %143 = OpLoad %17 %142
        %144 = OpConvertSToF %6 %143
        %145 = OpAccessChain %47 %45 %18 %19
        %146 = OpLoad %17 %145
        %147 = OpConvertSToF %6 %146
        %148 = OpCompositeConstruct %96 %138 %141 %144 %147
               OpStore %135 %148
               OpBranch %133
        %149 = OpLabel
        %150 = OpAccessChain %47 %45 %18 %46
        %151 = OpLoad %17 %150
        %152 = OpConvertSToF %6 %151
        %153 = OpCompositeConstruct %96 %152 %152 %152 %152
               OpStore %135 %153
               OpBranch %133
        %133 = OpLabel
               OpReturn
               OpFunctionEnd
