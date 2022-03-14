; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 117
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %31 %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(i1;"
               OpName %9 "x"
               OpName %27 "a"
               OpName %31 "gl_FragCoord"
               OpName %42 "_GLF_color"
               OpName %45 "buf1"
               OpMemberName %45 0 "_GLF_uniform_int_values"
               OpName %47 ""
               OpName %88 "buf_push"
               OpMemberName %88 0 "injectionSwitch"
               OpName %90 ""
               OpName %95 "buf0"
               OpMemberName %95 0 "_GLF_uniform_float_values"
               OpName %97 ""
               OpName %108 "param"
               OpName %113 "indexable"
               OpDecorate %31 BuiltIn FragCoord
               OpDecorate %42 Location 0
               OpDecorate %44 ArrayStride 16
               OpMemberDecorate %45 0 Offset 0
               OpDecorate %45 Block
               OpDecorate %47 DescriptorSet 0
               OpDecorate %47 Binding 1
               OpMemberDecorate %88 0 Offset 0
               OpDecorate %88 Block
               OpDecorate %94 ArrayStride 16
               OpMemberDecorate %95 0 Offset 0
               OpDecorate %95 Block
               OpDecorate %97 DescriptorSet 0
               OpDecorate %97 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %18 = OpConstant %6 1
         %19 = OpTypeBool
         %21 = OpConstant %6 2
         %28 = OpTypeFloat 32
         %29 = OpTypeVector %28 4
         %30 = OpTypePointer Input %29
         %31 = OpVariable %30 Input
         %32 = OpTypeInt 32 0
         %33 = OpConstant %32 1
         %34 = OpTypePointer Input %28
         %38 = OpConstantTrue %19
         %41 = OpTypePointer Output %29
         %42 = OpVariable %41 Output
         %43 = OpConstant %32 2
         %44 = OpTypeArray %6 %43
         %45 = OpTypeStruct %44
         %46 = OpTypePointer Uniform %45
         %47 = OpVariable %46 Uniform
         %48 = OpConstant %6 0
         %49 = OpTypePointer Uniform %6
         %84 = OpConstant %32 4
         %85 = OpTypeArray %29 %84
         %87 = OpTypeVector %28 2
         %88 = OpTypeStruct %87
         %89 = OpTypePointer PushConstant %88
         %90 = OpVariable %89 PushConstant
         %91 = OpTypePointer PushConstant %28
         %94 = OpTypeArray %28 %33
         %95 = OpTypeStruct %94
         %96 = OpTypePointer Uniform %95
         %97 = OpVariable %96 Uniform
         %98 = OpTypePointer Uniform %28
        %112 = OpTypePointer Function %85
        %114 = OpTypePointer Function %29
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %27 = OpVariable %7 Function
        %102 = OpVariable %7 Function
        %108 = OpVariable %7 Function
        %113 = OpVariable %112 Function
         %35 = OpAccessChain %34 %31 %33
         %36 = OpLoad %28 %35
         %37 = OpConvertFToS %6 %36
               OpStore %27 %37
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %40
         %39 = OpLabel
               OpBranch %40
         %40 = OpLabel
         %50 = OpAccessChain %49 %47 %48 %18
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %28 %51
         %53 = OpAccessChain %49 %47 %48 %48
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %28 %54
         %56 = OpAccessChain %49 %47 %48 %48
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %28 %57
         %59 = OpAccessChain %49 %47 %48 %18
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %28 %60
         %62 = OpCompositeConstruct %29 %52 %55 %58 %61
         %63 = OpAccessChain %49 %47 %48 %18
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %28 %64
         %66 = OpAccessChain %49 %47 %48 %48
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %28 %67
         %69 = OpAccessChain %49 %47 %48 %48
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %28 %70
         %72 = OpAccessChain %49 %47 %48 %18
         %73 = OpLoad %6 %72
         %74 = OpConvertSToF %28 %73
         %75 = OpCompositeConstruct %29 %65 %68 %71 %74
         %76 = OpAccessChain %49 %47 %48 %48
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %28 %77
         %79 = OpCompositeConstruct %29 %78 %78 %78 %78
         %80 = OpAccessChain %49 %47 %48 %48
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %28 %81
         %83 = OpCompositeConstruct %29 %82 %82 %82 %82
         %86 = OpCompositeConstruct %85 %62 %75 %79 %83
         %92 = OpAccessChain %91 %90 %48 %33
         %93 = OpLoad %28 %92
         %99 = OpAccessChain %98 %97 %48 %48
        %100 = OpLoad %28 %99
        %101 = OpFOrdLessThan %19 %93 %100
               OpSelectionMerge %104 None
               OpBranchConditional %101 %103 %107
        %103 = OpLabel
        %105 = OpAccessChain %49 %47 %48 %18
        %106 = OpLoad %6 %105
               OpStore %102 %106
               OpBranch %104
        %107 = OpLabel
        %109 = OpLoad %6 %27
               OpStore %108 %109
        %110 = OpFunctionCall %6 %10 %108
               OpStore %102 %110
               OpBranch %104
        %104 = OpLabel
        %111 = OpLoad %6 %102
               OpStore %113 %86
        %115 = OpAccessChain %114 %113 %111
        %116 = OpLoad %29 %115
               OpStore %42 %116
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
               OpBranch %12
         %12 = OpLabel
               OpLoopMerge %14 %15 None
               OpBranch %16
         %16 = OpLabel
         %17 = OpLoad %6 %9
         %20 = OpSGreaterThan %19 %17 %18
               OpBranchConditional %20 %13 %14
         %13 = OpLabel
         %22 = OpLoad %6 %9
         %23 = OpSDiv %6 %22 %21
               OpStore %9 %23
               OpBranch %15
         %15 = OpLabel
               OpBranch %12
         %14 = OpLabel
         %24 = OpLoad %6 %9
               OpReturnValue %24
               OpFunctionEnd
