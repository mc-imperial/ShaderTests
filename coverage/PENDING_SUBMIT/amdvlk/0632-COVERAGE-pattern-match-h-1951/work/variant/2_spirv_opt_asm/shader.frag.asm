; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %47
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %47 "gl_FragCoord"
               OpName %53 "buf0"
               OpMemberName %53 0 "_GLF_uniform_float_values"
               OpName %55 ""
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %47 BuiltIn FragCoord
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 4
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %37 = OpConstant %10 1
         %41 = OpTypeBool
         %46 = OpTypePointer Input %7
         %47 = OpVariable %46 Input
         %48 = OpConstant %11 1
         %49 = OpTypePointer Input %6
         %52 = OpTypeArray %6 %48
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpTypePointer Uniform %6
         %61 = OpConstant %10 2
         %69 = OpConstant %10 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21 %21
               OpStore %9 %22
         %27 = OpNot %10 %20
               OpBranch %28
         %28 = OpLabel
         %86 = OpPhi %10 %27 %5 %85 %31
         %38 = OpAccessChain %18 %16 %17 %37
         %39 = OpLoad %10 %38
         %40 = OpISub %10 %27 %39
         %42 = OpSGreaterThan %41 %86 %40
               OpLoopMerge %30 %31 None
               OpBranchConditional %42 %29 %30
         %29 = OpLabel
         %44 = OpNot %10 %86
         %45 = OpBitcast %11 %44
         %50 = OpAccessChain %49 %47 %48
         %51 = OpLoad %6 %50
         %57 = OpAccessChain %56 %55 %17 %17
         %58 = OpLoad %6 %57
         %59 = OpFAdd %6 %51 %58
         %60 = OpConvertFToS %10 %59
         %62 = OpAccessChain %18 %16 %17 %61
         %63 = OpLoad %10 %62
         %64 = OpIMul %10 %60 %63
         %65 = OpBitcast %11 %64
         %66 = OpULessThan %41 %45 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %70 = OpAccessChain %18 %16 %17 %69
         %71 = OpLoad %10 %70
         %72 = OpConvertSToF %6 %71
         %82 = OpCompositeConstruct %7 %72 %21 %21 %72
               OpStore %9 %82
               OpBranch %30
         %68 = OpLabel
               OpBranch %31
         %31 = OpLabel
         %85 = OpISub %10 %86 %37
               OpBranch %28
         %30 = OpLabel
               OpReturn
               OpFunctionEnd
