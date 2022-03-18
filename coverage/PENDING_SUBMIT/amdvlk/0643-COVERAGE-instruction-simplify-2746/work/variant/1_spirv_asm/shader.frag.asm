; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 112
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %44 %92
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %31 "i"
               OpName %40 "j"
               OpName %44 "gl_FragCoord"
               OpName %50 "buf1"
               OpMemberName %50 0 "_GLF_uniform_float_values"
               OpName %52 ""
               OpName %92 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %44 BuiltIn FragCoord
               OpDecorate %49 ArrayStride 16
               OpMemberDecorate %50 0 Offset 0
               OpDecorate %50 Block
               OpDecorate %52 DescriptorSet 0
               OpDecorate %52 Binding 1
               OpDecorate %92 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 5
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpTypePointer Uniform %6
         %20 = OpConstant %6 1
         %23 = OpConstant %6 2
         %26 = OpConstant %6 3
         %30 = OpTypePointer Function %6
         %38 = OpTypeBool
         %41 = OpTypeFloat 32
         %42 = OpTypeVector %41 4
         %43 = OpTypePointer Input %42
         %44 = OpVariable %43 Input
         %45 = OpConstant %10 1
         %46 = OpTypePointer Input %41
         %49 = OpTypeArray %41 %45
         %50 = OpTypeStruct %49
         %51 = OpTypePointer Uniform %50
         %52 = OpVariable %51 Uniform
         %53 = OpTypePointer Uniform %41
         %86 = OpTypeVector %38 4
         %91 = OpTypePointer Output %42
         %92 = OpVariable %91 Output
         %96 = OpConstant %6 4
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %31 = OpVariable %30 Function
         %40 = OpVariable %30 Function
         %18 = OpAccessChain %17 %15 %16 %16
         %19 = OpLoad %6 %18
         %21 = OpAccessChain %17 %15 %16 %20
         %22 = OpLoad %6 %21
         %24 = OpAccessChain %17 %15 %16 %23
         %25 = OpLoad %6 %24
         %27 = OpAccessChain %17 %15 %16 %26
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %7 %19 %22 %25 %28
               OpStore %9 %29
               OpStore %31 %20
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
         %37 = OpLoad %6 %31
         %39 = OpSGreaterThanEqual %38 %37 %16
               OpBranchConditional %39 %33 %34
         %33 = OpLabel
         %47 = OpAccessChain %46 %44 %45
         %48 = OpLoad %41 %47
         %54 = OpAccessChain %53 %52 %16 %16
         %55 = OpLoad %41 %54
         %56 = OpFOrdGreaterThanEqual %38 %48 %55
         %57 = OpLoad %6 %31
         %58 = OpSelect %6 %56 %20 %57
               OpStore %40 %58
               OpBranch %59
         %59 = OpLabel
               OpLoopMerge %61 %62 None
               OpBranch %63
         %63 = OpLabel
         %64 = OpLoad %6 %40
         %65 = OpLoad %6 %31
         %66 = OpSGreaterThanEqual %38 %64 %65
               OpBranchConditional %66 %60 %61
         %60 = OpLabel
         %67 = OpLoad %6 %31
         %68 = OpAccessChain %30 %9 %67
         %69 = OpLoad %6 %68
         %70 = OpISub %6 %69 %20
               OpStore %68 %70
               OpBranch %62
         %62 = OpLabel
         %71 = OpLoad %6 %40
         %72 = OpISub %6 %71 %20
               OpStore %40 %72
               OpBranch %59
         %61 = OpLabel
               OpBranch %35
         %35 = OpLabel
         %73 = OpLoad %6 %31
         %74 = OpISub %6 %73 %20
               OpStore %31 %74
               OpBranch %32
         %34 = OpLabel
         %75 = OpLoad %7 %9
         %76 = OpAccessChain %17 %15 %16 %16
         %77 = OpLoad %6 %76
         %78 = OpSNegate %6 %77
         %79 = OpAccessChain %17 %15 %16 %16
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %17 %15 %16 %23
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %17 %15 %16 %26
         %84 = OpLoad %6 %83
         %85 = OpCompositeConstruct %7 %78 %80 %82 %84
         %87 = OpIEqual %86 %75 %85
         %88 = OpAll %38 %87
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %107
         %89 = OpLabel
         %93 = OpAccessChain %17 %15 %16 %16
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %41 %94
         %97 = OpAccessChain %17 %15 %16 %96
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %41 %98
        %100 = OpAccessChain %17 %15 %16 %96
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %41 %101
        %103 = OpAccessChain %17 %15 %16 %16
        %104 = OpLoad %6 %103
        %105 = OpConvertSToF %41 %104
        %106 = OpCompositeConstruct %42 %95 %99 %102 %105
               OpStore %92 %106
               OpBranch %90
        %107 = OpLabel
        %108 = OpAccessChain %17 %15 %16 %96
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %41 %109
        %111 = OpCompositeConstruct %42 %110 %110 %110 %110
               OpStore %92 %111
               OpBranch %90
         %90 = OpLabel
               OpReturn
               OpFunctionEnd
