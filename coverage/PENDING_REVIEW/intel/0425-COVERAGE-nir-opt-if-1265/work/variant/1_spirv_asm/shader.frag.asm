; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 94
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %34
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %34 "gl_FragCoord"
               OpName %49 "i"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %34 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %22 = OpConstant %10 1
         %33 = OpTypePointer Input %7
         %34 = OpVariable %33 Input
         %35 = OpConstant %11 1
         %36 = OpTypePointer Input %6
         %39 = OpConstant %6 0
         %40 = OpTypeBool
         %48 = OpTypePointer Function %10
         %58 = OpConstant %10 2
         %62 = OpConstant %11 0
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %49 = OpVariable %48 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %23 = OpAccessChain %18 %16 %17 %22
         %24 = OpLoad %10 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpAccessChain %18 %16 %17 %22
         %27 = OpLoad %10 %26
         %28 = OpConvertSToF %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %10 %29
         %31 = OpConvertSToF %6 %30
         %32 = OpCompositeConstruct %7 %21 %25 %28 %31
               OpStore %9 %32
         %37 = OpAccessChain %36 %34 %35
         %38 = OpLoad %6 %37
         %41 = OpFOrdLessThan %40 %38 %39
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
         %44 = OpAccessChain %18 %16 %17 %22
         %45 = OpLoad %10 %44
         %46 = OpConvertSToF %6 %45
         %47 = OpCompositeConstruct %7 %46 %46 %46 %46
               OpStore %9 %47
               OpBranch %43
         %43 = OpLabel
         %50 = OpAccessChain %18 %16 %17 %22
         %51 = OpLoad %10 %50
               OpStore %49 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %10 %49
         %59 = OpAccessChain %18 %16 %17 %58
         %60 = OpLoad %10 %59
         %61 = OpSLessThan %40 %57 %60
               OpBranchConditional %61 %53 %54
         %53 = OpLabel
         %63 = OpAccessChain %36 %34 %62
         %64 = OpLoad %6 %63
         %65 = OpFOrdGreaterThan %40 %64 %39
               OpSelectionMerge %67 None
               OpBranchConditional %65 %66 %67
         %66 = OpLabel
         %68 = OpAccessChain %36 %34 %35
         %69 = OpLoad %6 %68
         %70 = OpFOrdLessThan %40 %69 %39
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
         %73 = OpAccessChain %18 %16 %17 %22
         %74 = OpLoad %10 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpCompositeConstruct %7 %75 %75 %75 %75
               OpStore %9 %76
               OpBranch %54
         %72 = OpLabel
               OpBranch %67
         %67 = OpLabel
         %78 = OpAccessChain %36 %34 %62
         %79 = OpLoad %6 %78
         %80 = OpFOrdGreaterThan %40 %79 %39
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %82
         %81 = OpLabel
         %83 = OpAccessChain %36 %34 %35
         %84 = OpLoad %6 %83
         %85 = OpFOrdLessThan %40 %84 %39
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
         %88 = OpAccessChain %18 %16 %17 %22
         %89 = OpLoad %10 %88
         %90 = OpConvertSToF %6 %89
         %91 = OpCompositeConstruct %7 %90 %90 %90 %90
               OpStore %9 %91
               OpBranch %87
         %87 = OpLabel
               OpBranch %82
         %82 = OpLabel
               OpBranch %55
         %55 = OpLabel
         %92 = OpLoad %10 %49
         %93 = OpIAdd %10 %92 %22
               OpStore %49 %93
               OpBranch %52
         %54 = OpLabel
               OpReturn
               OpFunctionEnd
