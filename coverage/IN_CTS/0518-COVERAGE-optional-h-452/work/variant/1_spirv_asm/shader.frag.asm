; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 147
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %15 %38
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %6 "func0("
               OpName %10 "func1("
               OpName %15 "gl_FragCoord"
               OpName %23 "buf1"
               OpMemberName %23 0 "_GLF_uniform_float_values"
               OpName %25 ""
               OpName %36 "tmp"
               OpName %38 "_GLF_color"
               OpName %42 "a"
               OpName %45 "buf2"
               OpMemberName %45 0 "_GLF_uniform_int_values"
               OpName %47 ""
               OpName %61 "buf3"
               OpMemberName %61 0 "three"
               OpName %63 ""
               OpName %99 "buf0"
               OpMemberName %99 0 "_GLF_uniform_uint_values"
               OpName %101 ""
               OpName %106 "a"
               OpName %109 "i"
               OpName %118 "j"
               OpDecorate %15 BuiltIn FragCoord
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 1
               OpDecorate %38 Location 0
               OpDecorate %44 ArrayStride 16
               OpMemberDecorate %45 0 Offset 0
               OpDecorate %45 Block
               OpDecorate %47 DescriptorSet 0
               OpDecorate %47 Binding 2
               OpMemberDecorate %61 0 Offset 0
               OpDecorate %61 Block
               OpDecorate %63 DescriptorSet 0
               OpDecorate %63 Binding 3
               OpDecorate %98 ArrayStride 16
               OpMemberDecorate %99 0 Offset 0
               OpDecorate %99 Block
               OpDecorate %101 DescriptorSet 0
               OpDecorate %101 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8
         %12 = OpTypeFloat 32
         %13 = OpTypeVector %12 4
         %14 = OpTypePointer Input %13
         %15 = OpVariable %14 Input
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 0
         %18 = OpTypePointer Input %12
         %21 = OpConstant %16 3
         %22 = OpTypeArray %12 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpConstant %8 0
         %27 = OpConstant %8 1
         %28 = OpTypePointer Uniform %12
         %31 = OpTypeBool
         %35 = OpTypePointer Function %13
         %37 = OpTypePointer Output %13
         %38 = OpVariable %37 Output
         %41 = OpTypePointer Function %8
         %43 = OpConstant %16 4
         %44 = OpTypeArray %8 %43
         %45 = OpTypeStruct %44
         %46 = OpTypePointer Uniform %45
         %47 = OpVariable %46 Uniform
         %48 = OpTypePointer Uniform %8
         %57 = OpConstant %8 3
         %61 = OpTypeStruct %8
         %62 = OpTypePointer Uniform %61
         %63 = OpVariable %62 Uniform
         %92 = OpConstant %8 2
         %97 = OpConstant %16 1
         %98 = OpTypeArray %16 %97
         %99 = OpTypeStruct %98
        %100 = OpTypePointer Uniform %99
        %101 = OpVariable %100 Uniform
        %102 = OpTypePointer Uniform %16
        %116 = OpConstant %8 5
        %141 = OpConstant %16 2
        %142 = OpTypePointer Output %12
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %106 = OpVariable %41 Function
        %109 = OpVariable %41 Function
        %118 = OpVariable %41 Function
         %79 = OpAccessChain %18 %15 %17
         %80 = OpLoad %12 %79
         %81 = OpAccessChain %28 %25 %26 %27
         %82 = OpLoad %12 %81
         %83 = OpFOrdGreaterThan %31 %80 %82
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %96
         %84 = OpLabel
         %86 = OpAccessChain %28 %25 %26 %26
         %87 = OpLoad %12 %86
         %88 = OpAccessChain %28 %25 %26 %27
         %89 = OpLoad %12 %88
         %90 = OpAccessChain %28 %25 %26 %26
         %91 = OpLoad %12 %90
         %93 = OpAccessChain %28 %25 %26 %92
         %94 = OpLoad %12 %93
         %95 = OpCompositeConstruct %13 %87 %89 %91 %94
               OpStore %38 %95
               OpBranch %85
         %96 = OpLabel
        %103 = OpAccessChain %102 %101 %26 %26
        %104 = OpLoad %16 %103
        %105 = OpExtInst %13 %1 UnpackSnorm4x8 %104
               OpStore %38 %105
               OpBranch %85
         %85 = OpLabel
        %107 = OpAccessChain %48 %47 %26 %92
        %108 = OpLoad %8 %107
               OpStore %106 %108
               OpStore %109 %26
               OpBranch %110
        %110 = OpLabel
               OpLoopMerge %112 %113 None
               OpBranch %114
        %114 = OpLabel
        %115 = OpLoad %8 %109
        %117 = OpSLessThan %31 %115 %116
               OpBranchConditional %117 %111 %112
        %111 = OpLabel
               OpStore %118 %26
               OpBranch %119
        %119 = OpLabel
               OpLoopMerge %121 %122 None
               OpBranch %123
        %123 = OpLabel
        %124 = OpLoad %8 %118
        %125 = OpSLessThan %31 %124 %92
               OpBranchConditional %125 %120 %121
        %120 = OpLabel
        %126 = OpFunctionCall %8 %10
        %127 = OpLoad %8 %106
        %128 = OpIAdd %8 %127 %126
               OpStore %106 %128
               OpBranch %122
        %122 = OpLabel
        %129 = OpLoad %8 %118
        %130 = OpIAdd %8 %129 %27
               OpStore %118 %130
               OpBranch %119
        %121 = OpLabel
               OpBranch %113
        %113 = OpLabel
        %131 = OpLoad %8 %109
        %132 = OpIAdd %8 %131 %27
               OpStore %109 %132
               OpBranch %110
        %112 = OpLabel
        %133 = OpLoad %8 %106
        %134 = OpAccessChain %48 %47 %26 %26
        %135 = OpLoad %8 %134
        %136 = OpIEqual %31 %133 %135
               OpSelectionMerge %138 None
               OpBranchConditional %136 %137 %138
        %137 = OpLabel
        %139 = OpAccessChain %28 %25 %26 %26
        %140 = OpLoad %12 %139
        %143 = OpAccessChain %142 %38 %141
        %144 = OpLoad %12 %143
        %145 = OpFSub %12 %144 %140
        %146 = OpAccessChain %142 %38 %141
               OpStore %146 %145
               OpBranch %138
        %138 = OpLabel
               OpReturn
               OpFunctionEnd
          %6 = OpFunction %2 None %3
          %7 = OpLabel
         %36 = OpVariable %35 Function
         %19 = OpAccessChain %18 %15 %17
         %20 = OpLoad %12 %19
         %29 = OpAccessChain %28 %25 %26 %27
         %30 = OpLoad %12 %29
         %32 = OpFOrdGreaterThan %31 %20 %30
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %34
         %33 = OpLabel
         %39 = OpLoad %13 %38
               OpStore %36 %39
               OpBranch %34
         %34 = OpLabel
         %40 = OpLoad %13 %36
               OpStore %38 %40
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %8 None %9
         %11 = OpLabel
         %42 = OpVariable %41 Function
         %49 = OpAccessChain %48 %47 %26 %27
         %50 = OpLoad %8 %49
               OpStore %42 %50
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %55
         %55 = OpLabel
         %56 = OpLoad %8 %42
         %58 = OpAccessChain %48 %47 %26 %57
         %59 = OpLoad %8 %58
         %60 = OpSLessThan %31 %56 %59
               OpBranchConditional %60 %52 %53
         %52 = OpLabel
         %64 = OpAccessChain %48 %63 %26
         %65 = OpLoad %8 %64
         %66 = OpAccessChain %48 %47 %26 %27
         %67 = OpLoad %8 %66
         %68 = OpSGreaterThan %31 %65 %67
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %74
         %69 = OpLabel
         %71 = OpFunctionCall %2 %6
         %72 = OpAccessChain %48 %47 %26 %57
         %73 = OpLoad %8 %72
               OpStore %42 %73
               OpBranch %70
         %74 = OpLabel
         %75 = OpFunctionCall %2 %6
               OpBranch %70
         %70 = OpLabel
               OpBranch %54
         %54 = OpLabel
               OpBranch %51
         %53 = OpLabel
         %76 = OpLoad %8 %42
               OpReturnValue %76
               OpFunctionEnd
