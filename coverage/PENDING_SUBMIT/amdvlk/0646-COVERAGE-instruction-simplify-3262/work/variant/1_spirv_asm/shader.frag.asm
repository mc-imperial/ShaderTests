; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 94
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %30 %75
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "sum"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %30 "gl_FragCoord"
               OpName %37 "buf0"
               OpMemberName %37 0 "_GLF_uniform_float_values"
               OpName %39 ""
               OpName %75 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %30 BuiltIn FragCoord
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 0
               OpDecorate %75 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %27 = OpTypeFloat 32
         %28 = OpTypeVector %27 4
         %29 = OpTypePointer Input %28
         %30 = OpVariable %29 Input
         %31 = OpConstant %9 0
         %32 = OpTypePointer Input %27
         %35 = OpConstant %9 1
         %36 = OpTypeArray %27 %35
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %40 = OpTypePointer Uniform %27
         %43 = OpTypeBool
         %45 = OpConstant %6 20
         %46 = OpConstant %6 -1
         %68 = OpConstant %6 2
         %74 = OpTypePointer Output %28
         %75 = OpVariable %74 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %53 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpStore %20 %16
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %20
         %33 = OpAccessChain %32 %30 %31
         %34 = OpLoad %27 %33
         %41 = OpAccessChain %40 %39 %15 %15
         %42 = OpLoad %27 %41
         %44 = OpFOrdGreaterThanEqual %43 %34 %42
         %47 = OpSelect %6 %44 %45 %46
         %48 = OpSLessThan %43 %26 %47
               OpBranchConditional %48 %22 %23
         %22 = OpLabel
         %49 = OpLoad %6 %20
         %50 = OpAccessChain %17 %14 %15 %16
         %51 = OpLoad %6 %50
         %52 = OpIEqual %43 %49 %51
               OpSelectionMerge %55 None
               OpBranchConditional %52 %54 %59
         %54 = OpLabel
         %56 = OpAccessChain %17 %14 %15 %16
         %57 = OpLoad %6 %56
         %58 = OpSNegate %6 %57
               OpStore %53 %58
               OpBranch %55
         %59 = OpLabel
         %60 = OpAccessChain %17 %14 %15 %16
         %61 = OpLoad %6 %60
               OpStore %53 %61
               OpBranch %55
         %55 = OpLabel
         %62 = OpLoad %6 %53
         %63 = OpLoad %6 %8
         %64 = OpIAdd %6 %63 %62
               OpStore %8 %64
               OpBranch %24
         %24 = OpLabel
         %65 = OpLoad %6 %20
         %66 = OpIAdd %6 %65 %16
               OpStore %20 %66
               OpBranch %21
         %23 = OpLabel
         %67 = OpLoad %6 %8
         %69 = OpAccessChain %17 %14 %15 %68
         %70 = OpLoad %6 %69
         %71 = OpIEqual %43 %67 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %89
         %72 = OpLabel
         %76 = OpAccessChain %17 %14 %15 %16
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %27 %77
         %79 = OpAccessChain %17 %14 %15 %15
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %27 %80
         %82 = OpAccessChain %17 %14 %15 %15
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %27 %83
         %85 = OpAccessChain %17 %14 %15 %16
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %27 %86
         %88 = OpCompositeConstruct %28 %78 %81 %84 %87
               OpStore %75 %88
               OpBranch %73
         %89 = OpLabel
         %90 = OpAccessChain %17 %14 %15 %15
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %27 %91
         %93 = OpCompositeConstruct %28 %92 %92 %92 %92
               OpStore %75 %93
               OpBranch %73
         %73 = OpLabel
               OpReturn
               OpFunctionEnd
